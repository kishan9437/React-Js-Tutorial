import React,{memo} from 'react'

function ChildComponent(props) {
    console.log('Children Component Rendering')
    return (
        <>
            <h2>Child Component : {props.count}</h2>
        </>
    )
}

export default memo(ChildComponent);