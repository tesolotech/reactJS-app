import React, { Component } from 'react';
import ChildComponent from './ChildComponent';

class Parent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message:'Parent Component'
        }
        this.WelcomeMessage = this.WelcomeMessage.bind(this);
    }
    WelcomeMessage(){
        alert(`Hello ${this.state.message}`);
    }
    render() {
        return (
            <div>
                <ChildComponent EventHandler={this.WelcomeMessage}/>
            </div>
        )
    }
}

export default Parent
