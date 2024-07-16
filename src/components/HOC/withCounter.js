import React from 'react'

// Work as Higher Order Component for Counters of same type
const UpdatedCounter = (OriginalCounter) => {
    class NewCounter extends React.Component {
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
            return <OriginalCounter incrCount={this.incrementCount} count={this.state.count} />
        }
    }
    return NewCounter
}

export default UpdatedCounter