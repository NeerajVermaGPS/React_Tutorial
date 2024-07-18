import React, { useReducer } from 'react'

const initialCount = {
    firstCounter: 0,
    secondCounter: 0
}
const reducer = (state, action) =>{
    switch(action.type){
        case "increment":
            return {...state, firstCounter: state.firstCounter + action.value}
        case "decrement":
            return {...state, firstCounter: state.firstCounter - action.value}
        case "increment2":
            return {...state, secondCounter: state.secondCounter + action.value}
        case "decrement2":
            return {...state, secondCounter: state.secondCounter - action.value}
        case "reset":
            return {...state, firstCounter: 0}
        case "reset2":
            return {...state, secondCounter: 0}
        default:
            return state
    }
}

function UseReducerHookTwo() {
    const [count, dispatchCount] = useReducer(reducer, initialCount)

  return (
    <div>
      <p>First Counter: {count.firstCounter}</p>
      <p>Second Counter: {count.secondCounter}</p>
      <button onClick={() => {dispatchCount({type: "increment", value: 1})}}>Increment</button>
      <button onClick={() => {dispatchCount({type: "decrement", value: 1})}}>Decrement</button>
      <button onClick={() => {dispatchCount({type: "increment", value: 5})}}>Increment 5</button>
      <button onClick={() => {dispatchCount({type: "decrement", value: 5})}}>Decrement 5</button>
      <br />
      <button onClick={() => {dispatchCount({type: "increment2", value: 1})}}>Increment2</button>
      <button onClick={() => {dispatchCount({type: "decrement2", value: 1})}}>Decrement2</button>
      <button onClick={() => {dispatchCount({type: "increment2", value: 5})}}>Increment2 5</button>
      <button onClick={() => {dispatchCount({type: "decrement2", value: 5})}}>Decrement2 5</button>
      <br />
      <button onClick={() => {dispatchCount({type: "reset"})}}>Reset</button>
      <button onClick={() => {dispatchCount({type: "reset2"})}}>Reset2</button>
    </div>
  )
}

export default UseReducerHookTwo
