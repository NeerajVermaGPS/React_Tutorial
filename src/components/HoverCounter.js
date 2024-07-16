import React from 'react'
import withCounter from './HOC/withCounter'

// Make use of HOC withCounter
function HoverCounter(props) {
  return (
    <div>
      <h1 onMouseEnter={props.incrCount}>You hovered {props.count} times</h1>
    </div>
  )
}

export default withCounter(HoverCounter)
