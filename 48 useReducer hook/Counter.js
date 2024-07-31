import React, { useReducer } from 'react'

const reducer = (state, action) => {
    console.log(state, action)

    switch (action.type) {
        case "Increment":
            return { count: state.count + 1 };

        case "Decrement":
            return { count: state.count - 1 };
        default:
            return state;
    }
}

export default function Counter() {
    const initialState = { count: 0 }

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h2>Count : {state.count}</h2>
            <button onClick={() => dispatch({ type: "Increment" })}>Increment Count</button>
            <button onClick={() => dispatch({ type: "Decrement" })}>Decrement Count</button>
        </div>
    )
}
