import React, { Component } from 'react'

// Conditional Rendering
class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: true
      }
    }
    
  render() {
    // return this.state.isLoggedIn && <div><h1>Welcome Madam</h1></div>

    return this.state.isLoggedIn ? <div><h1>Welcome Madam</h1></div> : <div><h1>Welcome Guest</h1></div>

    // let message
    // if(this.state.isLoggedIn){
    //     message = <h1>Welcome Madam</h1>
    // } else {
    //     message = <h1>Welcome Guest</h1>
    // }
    // return <div>{message}</div>

    // if (this.state.isLoggedIn) {
    //     return <h1>Welcome Madam</h1>
    // } else {
    //     return <h1>Welcome Guest</h1>
    // }
  }
}

export default UserGreeting
