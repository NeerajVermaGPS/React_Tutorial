import React, { useContext } from 'react'
import CompC from "./CompC"
import { ChannelContext, UserContext } from '../UseContextHook'

// uses useContext Hook
function CompB() {
    const user = useContext(UserContext)
    const channel = useContext(ChannelContext)
  return (
    <div>
      <CompC />
      <h1>{user} - {channel}</h1>
    </div>
  )
}

export default CompB
