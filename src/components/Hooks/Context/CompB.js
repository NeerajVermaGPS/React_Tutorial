import React, { useContext, useReducer } from 'react'
import CompC from "./CompC"
import { ChannelContext, TimerContext, UserContext } from '../UseContextHook'

// uses useContext Hook
function CompB() {
    const user = useContext(UserContext)
    const channel = useContext(ChannelContext)
    const timerc = useContext(TimerContext)
    const [timer, dispatchTimer] = useReducer(timerc.reducer, timerc.initialState)
  return (
    <div>
      <CompC />
      <h1>{user} - {channel}</h1>
      <h2>
        <p>{timer}</p>
        <button onClick={()=>{dispatchTimer("increment")}}>Increment</button>
        <button onClick={()=>{dispatchTimer("decrement")}}>Decrement</button>
        <button onClick={()=>{dispatchTimer("reset")}}>Reset</button>
      </h2>
    </div>
  )
}

export default CompB
