import React, { useState } from 'react'

// Event Handlers in Functional Component
function ClickFunc() {
  const [msg, setMsg] = useState("Click Me")

  function changeContent() {
    setMsg("I'm Clicked")
  }
  return (
    <div>
      <button onClick={changeContent}>{msg}</button>
    </div>
  )
}

export default ClickFunc
