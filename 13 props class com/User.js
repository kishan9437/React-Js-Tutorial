import React, { Component } from 'react'

export default class User extends Component {
  render() {
    console.log(this.props)
    
    return (
        <>
            <div>
                <h1>User List</h1>
                <h1>Name:{this.props.name}</h1>
                <h1>Email:{this.props.email}</h1>
            </div>
        </>
    )
  }
}
