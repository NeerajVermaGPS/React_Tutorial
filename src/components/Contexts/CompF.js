import React, { Component } from 'react'
import { UserConsumer } from './UserContext'

class CompF extends Component {
  render() {
    return (
      <UserConsumer>
        {
            (usr) => <h1>Hii {usr}</h1>
        }
      </UserConsumer>
    )
  }
}

export default CompF
