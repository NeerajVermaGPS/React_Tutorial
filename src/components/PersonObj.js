import React from 'react'
import Person from "./Person"

//Rendering the data of an onject
function PersonObj() {
    let persons = [
        {
            id: 1,
            name: "Alice",
            age: 30,
            skill: "JavaScript"
        },
        {
            id: 2,
            name: "Madam",
            age: 22,
            skill: "Python"
        },
        {
            id: 3,
            name: "Charlie",
            age: 28,
            skill: "React"
        },
        {
            id: 4,
            name: "David",
            age: 32,
            skill: "Node.js"
        }
    ];
    
    const nameList = persons.map(person => <Person key={person.id} person={person}/>)

  return <div>{nameList}</div>
}

export default PersonObj
