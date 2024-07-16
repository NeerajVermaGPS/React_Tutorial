import React from 'react'

// Work as Higher Order Component for Counters of same type
const withCounter = (WrappedComponent) => {
    class WithCounter extends React.Component {
        constructor(props) {
          super(props)
        
          this.state = {
             name: "Madam",
             count: 0
          }
        }

        incrementCount = () => {
            this.setState(prev => {
                return {count: prev.count + 1}
            })
        }

        render() {
            return <WrappedComponent incrCount={this.incrementCount} count={this.state.count} {...this.props}/>
        }
    }
    return WithCounter
}

export default withCounter