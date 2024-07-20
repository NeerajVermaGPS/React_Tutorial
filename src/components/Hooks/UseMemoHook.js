import React, { useMemo, useState } from 'react'

// useMemo and useState are almost same Hooks but the difference is that useMemo check for cached returned value and useState check for the complete function for caching
function UseMemoHook() {
    const [firstCounter, setFirstCounter] = useState(0)
    const [secondCounter, setSecondCounter] = useState(0)

    const oddEvenCheckOne = useMemo(() => {
        let i = 0
        while (i < 200000000) i++
        console.log("oddeven one")
        return firstCounter % 2 ? "Odd" : "Even"
    }, [firstCounter])
    
    const oddEvenCheckTwo = () => {
        console.log("oddeven two")
        return secondCounter % 2 ? "Odd" : "Even"
    }
    
    const incrementCountOne = () => {
        console.log("increment one")
        setFirstCounter(firstCounter + 1)
    }
    
    const incrementCountTwo = () => {
        console.log("increment two")
        setSecondCounter(secondCounter + 1)
    }
  return (
    <div>
      <button onClick={incrementCountOne} style={{marginRight: "10px"}}>Increment Count 1</button> {firstCounter} - {oddEvenCheckOne} 
      <br />
      <button onClick={incrementCountTwo} style={{marginRight: "10px"}}>Increment Count 2</button> {secondCounter} - {oddEvenCheckTwo()}
    </div>
  )
}

export default UseMemoHook
