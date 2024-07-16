import React from 'react'

// Rednders a list of names
function NameList() {
    const nList = ["A",  "B", "C"]
    const name = nList.map((x, i) => <h1 key={i}>{x}</h1>); // arrow function accept two aguments, one is value and other is key from the array(automatically)
  return <div>{ name }</div>
}

export default NameList
