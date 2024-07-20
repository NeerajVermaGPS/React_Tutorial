import React from 'react'

function Count(props) {
    console.log(`Rendering Button: ${props.text}`)
  return (
    <div>
      {props.text}: {props.val}
    </div>
  )
}

export default React.memo(Count)
