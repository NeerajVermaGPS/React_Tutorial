import React, { Component } from 'react'

class ClassTimer extends Component {
    interval
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }

    componentDidMount() {
        this.interval = setInterval(()=> {
            this.setState(prev => ({count: prev.count + 1}))
        }, 1000)
    }

    componentWillUnmount(){
        clearInterval(this.interval)
    }
    
  render() {
    return (
      <div>
        {this.state.count}
      </div>
    )
  }
}

export default ClassTimer
