import React from 'react'
import ParentComponent from './Callback/ParentComponent'

// useMemo and useState are almost same Hooks but the difference is that useMemo check for cached returned value and useState check for the complete function for caching
function UseCallbackHook() {
  return (
    <div>
      <ParentComponent />
    </div>
  )
}

export default UseCallbackHook
