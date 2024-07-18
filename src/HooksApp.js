import './App.css';
import React/* , { useState } */ from 'react'
import UseReducerHookTwo from './components/Hooks/UseReducerHookTwo';
// import FetchData from './components/Hooks/FetchData';
// import UseStateHook from './components/Hooks/UseStateHook';
// import UseEffectHook from './components/Hooks/UseEffectHook';
// import UseContextHook from './components/Hooks/UseContextHook';
// import UseReducerHook from './components/Hooks/UseReducerHook';
// import UseEffectHookTwo from './components/Hooks/UseEffectHookTwo';
// import UseEffectHookThree from './components/Hooks/UseEffectHookThree';

// This will be working as new App.js for all the tutorials of Hooks
function HooksApp() {
  // const [display, setDisplay] = useState(true)

  return (
    <div>
      {/* <UseStateHook /> */}
      {/* <UseEffectHook /> */}
      {/* <UseEffectHookTwo /> */}
      {/* <button onClick={() => setDisplay(!display)}>Toggle Display</button>
      {display ? <UseEffectHookThree /> : ""} */}
      {/* <FetchData /> */}
      {/* <UseContextHook /> */}
      {/* <UseReducerHook /> */}
      <UseReducerHookTwo />
    </div>
  )
}

export default HooksApp
