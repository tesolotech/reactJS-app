import React from 'react'

// const Welcome = ()=> <h1>Welcome Vikash in React World</h1>

class Welcome extends React.Component{
    constructor(){
        super();
        this.state = {
            message:'Welcome Vikash in React World',
            count:0
        }
    }
    changeMessage(){
        this.setState({message:'Thanks for clicking! Have a greate day',count: this.state.count + 2})
    }
    render(){
        return (
        <div>
            <h1>{this.state.message}</h1>
            <hr />
            <span>Your clicking score is {this.state.count}</span><br/>
            <button onClick={()=>{this.changeMessage()}}>Click me to Change</button>
            {/* <h2>{this.props.name}</h2> */}
        </div>
        )
    }
}

export default Welcome;