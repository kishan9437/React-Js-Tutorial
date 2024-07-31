import React,{memo} from 'react'

function ChildComponent({ increment }) {
    console.log('child component')
    return (
        <div>
            <button onClick={increment}>Increment</button>
        </div>
    )
}
export default memo(ChildComponent);