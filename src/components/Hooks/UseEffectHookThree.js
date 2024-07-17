import React, { useEffect, useState } from 'react'

// We will see cleanup using useEffect hook (works as componentWillUnmount in class)
function UseEffectHookThree() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    function trackMouse(e) {
        setX(e.clientX)
        setY(e.clientY)
        console.log("Tracking mouse!")
    }

    useEffect(() => {
        console.log("Mounting component")
        window.addEventListener("mousemove", trackMouse)

        return () => {
            console.log("Unmounting component")
            window.removeEventListener("mousemove", trackMouse)
        }
    }, [])

  return (
    <div>
      X: {x} Y: {y}
    </div>
  )
}

export default UseEffectHookThree
