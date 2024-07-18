import React, { useReducer } from 'react'

// Uses the useReducer for simple states
const initialState = 0

const reducer = (state, action) =>{
    switch(action){
        case "increment":
            return state + 1
        case "decrement":
            return state - 1
        case "reset":
            return initialState
        default:
            return state
    }
}
function UseReducerHook() {
    const [count, dispatchCount] = useReducer(reducer, initialState)
  return (
    <div>
      <p>{count}</p>
      <button onClick={()=>{dispatchCount("increment")}}>Increment</button>
      <button onClick={()=>{dispatchCount("decrement")}}>Decrement</button>
      <button onClick={()=>{dispatchCount("reset")}}>Reset</button>
    </div>
  )
}

export default UseReducerHook
