import React from 'react'
import ReactDOM from "react-dom"

class PortalsD extends React.Component {
  render(){
    return ReactDOM.createPortal(
      <div style={{
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems:"center",
        transition: "0.4s",
        zIndex: "2000"
      }}>
      {this.props.children}
      </div>, document.getElementById("portal-root"))
  }
}

export default PortalsD
