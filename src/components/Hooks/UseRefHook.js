import React, { useEffect, useRef, useState } from 'react'

function UseRefHook() {
    const inputRef = useRef(null)
    const [inputVal, setInputVal] = useState("")

    useEffect(() => {
        console.log("Input element focused!")
        inputRef.current.focus()
    }, [])

  return (
    <div>
      <input type="text" ref={inputRef} value={inputVal} onChange={(e) => setInputVal(e.target.value)}/>
    </div>
  )
}

export default UseRefHook
