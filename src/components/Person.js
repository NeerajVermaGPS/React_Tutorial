import React from 'react'

// Co-Component of PersonObj
function Person(props) {
  return (
    <div>
      <span>ID: {props.person.id}</span>
      <span>Name: {props.person.name}</span>
      <span>Age: {props.person.age}</span>
      <span>Skill: {props.person.skill}</span>
    </div>
  )
}

export default Person
