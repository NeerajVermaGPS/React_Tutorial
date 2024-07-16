import React, { Component } from 'react'
import { UserConsumer } from './UserContext'

class CompC extends Component {
  render() {
    return (
    <UserConsumer>
        {(username) => <div>Hii {username}</div>}
    </UserConsumer>
    )
  }
}

export default CompC
