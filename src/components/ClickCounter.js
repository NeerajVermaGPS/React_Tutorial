import React from 'react'
import withCounter from './HOC/withCounter'

// Make use of HOC withCounter
function ClickCounter(props) {
  return (
    <div>
      <p>Clicked {props.count} times</p>
      <button onClick={props.incrCount}>Start Counter</button>
      {props.name}
    </div>
  )
}

export default withCounter(ClickCounter)
