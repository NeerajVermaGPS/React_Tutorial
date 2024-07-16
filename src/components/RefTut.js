import React from 'react'
import RefChild from './RefChild'

// This explains the concept of Refs in React
// class RefTut extends React.PureComponent {
class RefTut extends React.Component {
    constructor(props) {
      super(props)
      this.cbRef = React.createRef()

      this.state = ({
        isClicked: false
      })
    }
    
    componentDidMount(){
        this.cbRef.current.focus()
    }

    render(){
        console.log("Rerendered")
    return (
        <div>
            <input type="text" ref={this.cbRef} />
            <button onClick={() => {
                this.setState({
                    isClicked: true
                })
            }}>Click</button>
            {this.state.isClicked ? <RefChild checkVal={this.cbRef.current.value} /> : ""}
        </div>
        )
    }
}

export default RefTut
