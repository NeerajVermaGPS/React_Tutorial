import React from 'react'

// Destruct Functional Props
const DestructProp = ( props/* or {name, newName} */) => {
  const {name, newName} = props // remove this line if using the second way of destructuring
  return (
    <div>
      <h1>{name} aka {newName}</h1>
    </div>
  )
}

export default DestructProp