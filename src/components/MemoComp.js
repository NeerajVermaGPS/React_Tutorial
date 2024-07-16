import React from 'react'

function MemoComp(props) {
    console.log("Memo")
  return (
    <div>
      {props.nameA}
    </div>
  )
}

export default React.memo(MemoComp)
