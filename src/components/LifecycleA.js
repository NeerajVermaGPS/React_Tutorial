import React, { Component } from 'react'

class LifecycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         nameA: "Madam"
      }
      console.log("Constructor Called")
    }

    static getDerivedStateFromProps(props, state){
        console.log("getDerivedStatefromProps Called")
        return null
    }

    componentDidMount(){
        console.log("componentDidMount Called")
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log("shouldComponentUpdate Called")
        if(this.state.nameA === nextState.nameA){
            return false
        }
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("getSnapshotBeforeUpdate Called")
        return null
    }

    componentDidUpdate(){
        console.log("componentDidUpdate Called")
    }
    
  render() {
    return (
      <div>
        {console.log("Render Called")}
        <button onClick={() => {this.setState({nameA: "Madam"})}}>Say Hii to Madam!</button>
      </div>
    )
  }
}

export default LifecycleA
