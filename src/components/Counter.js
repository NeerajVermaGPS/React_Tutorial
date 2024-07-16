import React, { Component } from 'react'

// Using user-defined functions in React
export default class Counter extends Component {
    constructor(props){
        super(props)
        this.state = {
            count: this.props.sec,
            message: " seconds remaining"
        }
    }
    
    decrementCount = () => {
        if(this.state.count > 1){
            this.setState(prevState => {
                // eslint-disable-next-line react/no-direct-mutation-state
                return {count: prevState.count - 1}
            }, ()=> {
                console.log(this.state.count)
            })
            console.log(this.state.count)
            setTimeout(()=>{this.decrementCount()}, 1000)
        } else {
            this.setState({
                count: "",
                message: "Timeout"
            })
        }
    }

  render() {
    return (
      <div>
        <p>{this.state.count}{this.state.message}</p>
        <button onClick={()=>{this.decrementCount()}}>Start Counter</button>
      </div>
    )
  }
}
