import React, { Component } from 'react'

class EventHandling extends Component {
    constructor(){
        super();
        this.state = {
            message:'Hello Developer'
        }
    }
    clicEvent(){
        this.setState({message:'GOodBye'})
        alert('Button clicked');
    }
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                {/* <button onClick={this.clicEvent.bind(this)}>Click me</button> */}
                <button onClick={()=>{this.clicEvent()}}>Click me</button>
            </div>
        )
    }
}

export default EventHandling
