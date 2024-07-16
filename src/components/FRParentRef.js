import React, { Component } from 'react'
import FRRef from './FRRef'
import FRRefWithoutClass from './FRRefWithoutClass'

// Shows Forward Refs
class FRParentRef extends Component {
    constructor(props) {
      super(props)
    
      this.friinput = React.createRef()
      this.friwcinput = React.createRef()
    }
    
  render() {
    return (
      <div>
        <FRRef ref={this.friinput}/>
        <FRRefWithoutClass ref={this.friwcinput}/>
        <button onClick={() => {
            this.friwcinput.current.makefocus()
        }}>Click Me</button>
      </div>
    )
  }
}

export default FRParentRef
