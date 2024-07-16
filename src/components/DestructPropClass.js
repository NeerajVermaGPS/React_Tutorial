import React, { Component } from "react"

// Destruct Class Props and States
class DestructPropClass extends Component {
    render() {
        const {name, newName} = this.props
        // const {state1, state2} = this.state //for state
        return (
            <div>
                <h1>{name} aka {newName}</h1>
            </div>
        )
    }
}

export default DestructPropClass