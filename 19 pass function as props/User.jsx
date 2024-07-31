import React from 'react'

export default function User(props) {
    console.log(props)
  return (
    <>
      <h1>user component</h1>

      <button onClick={props.handleClick} >click me</button>

      <p>Count: {props.count}</p>
      <button onClick={props.increment}>Increment</button>
    </>
  )
}
