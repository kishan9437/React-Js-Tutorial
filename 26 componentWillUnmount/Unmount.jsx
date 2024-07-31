import React, { Component } from 'react'

export default class Unmount extends Component {
    componentDidMount(){
        this.intervalId=setInterval(()=>{
            console.log("interval")
        },1000)
    }
    componentWillUnmount(){
        clearInterval(this.intervalId);
        console.log('Interval tik remove')
    }
  render() {
    return (
      <h2>child component will unmounting</h2>
    )
  }
}
