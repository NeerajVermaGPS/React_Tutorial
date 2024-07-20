import React, { useEffect, useRef, useState } from 'react'

function UseRefHookTwo() {
    const [count, setCount] = useState(0)
    const intervalRef = useRef()

    useEffect(()=>{
        intervalRef.current = setInterval(()=>{
            setCount(prev => prev + 1)
        }, 1000)

        return ()=>{
            clearInterval(intervalRef.current)
        }
    }, [])
  return (
    <div>
      Count: {count}
      <button onClick={()=>{clearInterval(intervalRef.current)}}>Clear Timer</button>
    </div>
  )
}

export default UseRefHookTwo
