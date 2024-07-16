import React from 'react'
import UpdatedCounter from './HOC/withCounter'

// Make use of HOC withCounter
function HoverCounter(props) {
  return (
    <div>
      <h1 onMouseEnter={props.incrCount}>You hovered {props.count} times</h1>
    </div>
  )
}

export default UpdatedCounter(HoverCounter)
