import React, { useContext } from 'react'
import { MyContext } from './App'

export default function Child2() {
    const sharedData = useContext(MyContext);
    console.log(sharedData)

    return (
        <div>
            <h3>Child2</h3>
            <p>{sharedData}</p>
        </div>
    )
}
