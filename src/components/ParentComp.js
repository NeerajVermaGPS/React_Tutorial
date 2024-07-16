import React, { Component } from 'react'
import PureComp from './PureComp'
import RegComp from './RegComp'
import MemoComp from './MemoComp';

// Shows the Demo of Pure And Regular Components and Memos
export class ParentComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: "Madam"
      }
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({
                name: "Madam"
            })
        }, 2000);
    }
    
  render() {
    console.log("Parent")
    return (
      <div>
        <PureComp nameA={this.state.name}/>
        <RegComp nameA={this.state.name}/>
        <MemoComp nameA={this.state.name} />
      </div>
    )
  }
}

export default ParentComp
