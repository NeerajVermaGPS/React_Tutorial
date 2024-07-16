import React, { Component } from 'react'

// Event Handlers in Class Component
class ClickClass extends Component {
  constructor() {
    super()
    this.state = {
        msg: "Click Me"
    }

    // this.changeContent = this.changeContent.bind(this)  // Neccessary for first method
  }
//   changeContent() {
//     this.setState({
//         msg: "I'm Clicked"
//     })
//   }  //This is for first three methods

  changeContent = () => {
    this.setState({
        msg: "I'm Clicked"
    })
  }

  render() {
    return (
      <div>
        {/* <button onClick={this.changeContent()}>{this.state.msg}</button> */} {/* This will not work untill comment "A" is not defined as event handlers in JS needs to be binded with 'this' keyword. Following are some methds to overcome this problem: */}
        {/* <button onClick={() => {this.changeContent()}}>{this.state.msg}</button>
        <button onClick={this.changeContent.bind(this)}>{this.state.msg}</button> */}
        <button onClick={this.changeContent}>{this.state.msg}</button>
      </div>
    )
  }
}

export default ClickClass
