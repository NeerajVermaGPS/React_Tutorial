import React, { Component } from 'react'

// RefTut as parent component and renders itself as conditional component
class RefChild extends Component {
    constructor(props) {
      super(props)
      
      this.inputRef = React.createRef()
      this.countRef = React.createRef()
    }
    
  render() {
    console.log(this.inputRef)
    return (
        <div ref={this.inputRef}>
            <div>You are remaining with <span ref={this.countRef}>{this.props.checkVal}</span> chances!</div>
            <button onClick={() => {
                if (this.countRef.current.textContent > 0){
                    this.countRef.current.textContent = parseInt(this.countRef.current.textContent) - 1
                } else {
                    this.inputRef.current.innerHTML = `All chances exhausted!`
                }
            }}>Take Chance</button>
        </div>
    )
  }
}

export default RefChild
