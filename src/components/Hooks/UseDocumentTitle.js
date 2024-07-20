import React, { useState } from 'react'
import useDocumentTitle from './CustomHooks/useDocumentTitle'

function UseDocumentTitle() {
    const [count, setCount] = useState(0)
    
    useDocumentTitle(count)
    return (
    <div>
      <button onClick={()=>{setCount(prev => prev + 1)}}>Increase Count</button>
    </div>
  )
}

export default UseDocumentTitle