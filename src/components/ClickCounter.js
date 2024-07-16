import React from 'react'
import UpdatedCounter from './HOC/withCounter'

// Make use of HOC withCounter
function ClickCounter(props) {
  return (
    <div>
      <p>Clicked {props.count} times</p>
      <button onClick={props.incrCount}>Start Counter</button>
    </div>
  )
}

export default UpdatedCounter(ClickCounter)
