import React from 'react'

// We will see how useEffect hook is loaded with every update in state (works as componentDidUpdate in class)
function UseEffectHook() {
    const [count, setCount] = React.useState(0)
    const [name, setName] = React.useState("")
    const btnRef = React.createRef()

    React.useEffect(() => {
        console.log("I am updating")
        document.title = `You clicked ${count} times`
        // document.title = btnRef.current.textContent

    }, [count]) // [] is used to run it only 1 time when component mounts
  return (
    <div>
      <input type="text" value={name} onChange={(e) => {setName(e.target.value)}}/>
      <button onClick={() => {setCount(prev => prev + 1)}} ref={btnRef}>You clicked {count} times</button>
    </div>
  )
}

export default UseEffectHook
