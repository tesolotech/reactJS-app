import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            <button onClick={props.EventHandler}>Click me</button>
        </div>
    )
}

export default ChildComponent
