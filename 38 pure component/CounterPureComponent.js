import React, { PureComponent } from 'react'

export default class CounterPureComponent extends PureComponent {
  render() {
    console.log("pure component render")
    return (
      <div>
        <h1>counter : {this.props.count}</h1>
        <button onClick={this.props.onIncrement}> Increment</button>
      </div>
    )
  }
}
