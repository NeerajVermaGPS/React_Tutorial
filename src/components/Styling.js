import React from 'react'
import "./files/Styling.css"

// This file shows the styling methods in the React

const heading = {
  fontSize: "72px",
  color: "green"
}

function Styling(props) {
    const isPrimary = props.primary ? "primary" : ""
    const isFontXL = props.fontXL ? "font-xl" : ""
  return (
    <div>
      {/* <h1 className={styles.success}>Success Class from Module CSS: Not inherited in child components</h1> */} {/* Throw error */}
      {/* <h1 className='error'>Error Class from Direct CSS: Inherited in child components</h1> */} {/* It uses the inherited style.css from App.js */}
      <div className={`${isPrimary} ${isFontXL}`}>Hii Madam!</div>
      <div style={heading}>Hii Madam!</div>
    </div>
  )
}

export default Styling
