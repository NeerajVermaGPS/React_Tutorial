import React from 'react'
import { UserContext, ChannelContext } from '../UseContextHook'

// Uses multiple contexts, to check useContext go to CompB
function CompC() {
  return (
    <div>
      <UserContext.Consumer>
        {value => {
            return (<ChannelContext.Consumer>
                {val => {
                    return <h1>Hii {value}<br/>Channel Name: {val}</h1>
                }}
            </ChannelContext.Consumer>)
        }}
      </UserContext.Consumer>
    </div>
  )
}

export default CompC
