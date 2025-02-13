import React from 'react'
import useCounter from './useCounter'

function CounterComponent() {
    const { count, increment, decrement } = useCounter();
    //console.log(useCounter)
    return (
        <>
            <p>Count : {count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </>
    )
}

export default CounterComponent
