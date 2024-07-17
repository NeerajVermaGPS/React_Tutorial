import React, { useEffect } from 'react'

// We will see how to run useEffect hook only once (works as componentDidMount in class)
function UseEffectHookTwo() {
    const [x, setX] = React.useState(0)
    const [y, setY] = React.useState(0)

    const trackMouse = (e) => {
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        window.addEventListener("mousemove", trackMouse)
        console.log("I am called!")
    }, [])

  return (
    <div>
      <h3>Your current cursor position</h3>
      <p>X: {x} Y: {y}</p>
    </div>
  )
}

export default UseEffectHookTwo
