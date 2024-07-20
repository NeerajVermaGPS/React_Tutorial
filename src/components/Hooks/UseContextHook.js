import React from 'react'
import CompA from './Context/CompA'

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

export const TimerContext = React.createContext()
const initialState = 0;
const reducer = (state, action) => {
  switch(action) {
    case "increment":
      return state + 1
    case "decrement":
      return state - 1
    case "reset":
      return initialState
    default:
      return state
  }
}

function UseContextHook() {
  return (
    <div>
      <TimerContext.Provider value={{initialState: initialState, reducer: reducer}}>
        <UserContext.Provider value="Madam">
          <ChannelContext.Provider value="Complicated">
              <CompA/>
          </ChannelContext.Provider>
        </UserContext.Provider>
      </TimerContext.Provider>
    </div>
  )
}

export default UseContextHook
