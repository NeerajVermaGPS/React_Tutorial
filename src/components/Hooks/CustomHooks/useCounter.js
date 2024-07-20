import { useState } from 'react'

function useCounter(initialCount = 0) {
  const [count, setCount] = useState(initialCount)

  const incrementCount = () => {
    setCount(prev => prev + 1)
  }

  const decrementCount = () => {
    setCount(prev => prev - 1)
  }

  const reset = () => {
    setCount(initialCount)
  }
    
  return [count, incrementCount, decrementCount, reset]
}

export default useCounter
