import React, { Component } from 'react'

// Class States
export default class Message extends Component {
    constructor() {
        super()
        this.state = {
            message: "Hii Madam!"
        }
    }

    changeMessage(){
        this.setState({
            message: "Sure Neeraj!"
        })
    }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={()=>{this.changeMessage()}}>Meet</button>
      </div>
    )
  }
}
