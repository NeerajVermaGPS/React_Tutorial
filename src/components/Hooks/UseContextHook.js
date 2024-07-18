import React from 'react'
import CompA from './Context/CompA'

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

function UseContextHook() {
  return (
    <div>
      <UserContext.Provider value="Madam">
        <ChannelContext.Provider value="Complicated">
            <CompA/>
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  )
}

export default UseContextHook
