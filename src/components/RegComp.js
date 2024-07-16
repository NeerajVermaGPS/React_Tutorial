import React, { Component } from 'react'

class RegComp extends Component {
  render() {
    console.log("Regular")
    return (
      <div>
        {this.props.nameA}
      </div>
    )
  }
}

export default RegComp
