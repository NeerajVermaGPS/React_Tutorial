import React, { PureComponent } from 'react'

// Pure Component do not re-render component untill props or states are changed. It do so by Shallow Compare of props and states. It calls shouldComponentChange function for the same by default.
class PureComp extends PureComponent {    
  render() {
    console.log("Pure")
    return (
      <div>
        {this.props.nameA}
      </div>
    )
  }
}

export default PureComp
