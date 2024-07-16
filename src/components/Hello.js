import { createElement } from "react"
import Greet from "./Greet"

// Rendering React Component without using JSX
const Hello = () => {
    return createElement("div", {id:"hlo"}, <Greet name="Madam">This is Secret.</Greet>)
}

export default Hello