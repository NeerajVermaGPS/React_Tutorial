import React from "react"

// Function Props
const Greet = (props) => {
    return (
        <div>
            <h1>Hello {props.name}!</h1>
            {props.children}
        </div>
    )
}
// function Greet() {
//     return <h1>Hello Madam!</h1>
// }

export default Greet