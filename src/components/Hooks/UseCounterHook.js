import React from 'react'
import useCounter from './CustomHooks/useCounter'

function UseCounterHook() {
    const [count, incrementCount, decrementCount, reset] = useCounter()
  return (
    <div>
        <h1>Count: {count}</h1>
      <button onClick={incrementCount}>Increment Count</button>
      <button onClick={decrementCount}>Decrement Count</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default UseCounterHook
