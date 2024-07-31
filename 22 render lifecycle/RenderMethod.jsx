import React, { Component } from 'react'

export default class RenderMethod extends Component {
  render() {
    console.log('render method',this.props)
    return (
      <>
        <h1>render method {this.props.name} </h1>
      </>
    )
  }
}
