import React from 'react'

function UseStateHook() {
    const [count, setCount] = React.useState(0)
    const [name, setName] = React.useState({
        firstName: "",
        lastName: ""
    })
    const [items, setItems] = React.useState([])
    const [newitem, setNewItem] = React.useState("")

    const incrCountFiveA = () => {
        for (let index = 0; index < 5; index++) {         
            setCount(count + 1)
        }
    }
    const incrCountFiveB = () => {
        for (let index = 0; index < 5; index++) {
            setCount(prevcount => prevcount + 1)
        }
    }


    const addElement = (place) =>{
        if (newitem !== ""){
            // place === "last" ? setItems([...items, {newitem}]) : setItems([...items,items.unshift(newitem)]);
            setItems([...items, newitem])
            document.getElementById("info").innerHTML = "Item added successfully!"
        } else {
            document.getElementById("info").innerHTML = "Enter data first"
        }
    }

    // const removeElement = (place) =>{
    //     if (typeof (place === "last" ? setItems(items.pop()) : setItems(items.shift())) === 'undefined'){
    //         document.getElementById("info").innerHTML = "Array is empty!"
    //     } else {
    //         document.getElementById("info").innerHTML = "Element removed"
    //     }
    // }

  return (
    <>
    <h1>useState Hook</h1>
    <div>
        Without PrevState: 
        <button style={{margin: "10px"}} onClick={incrCountFiveA}>Current value: {count}</button>
    </div>
    <div>
        With PrevState: 
        <button style={{margin: "10px"}} onClick={incrCountFiveB}>Current value: {count}</button>
    </div>
    <div>
        <br />
        <h1>useState with Object</h1>
        <input type="text" value={name.firstName} placeholder='Enter first name' onChange={(e) => {setName({...name, firstName: e.target.value})}}/>
        <br />
        <input type="text" value={name.lastName} placeholder='Enter last name' onChange={(e) => {setName({...name, lastName: e.target.value})}}/>
        <p>First Name: {name.firstName}</p>
        <p>Last Name: {name.lastName}</p>
    </div>
    <div>
        <h1>useState with Array</h1>
        <input type="text" value={newitem} onChange={(e) => setNewItem(e.target.value)} />
        <button onClick={() => {addElement("last")}}>Add Item to Last</button>
        {/* <button onClick={() => {addElement("start")}}>Add Item to Beginning</button> */}
        {/* <button onClick={() => {removeElement("last")}}>Remove Last Item</button>
        <button onClick={() => {removeElement("start")}}>Remove First Item</button> */}
        <div id='info'></div>
        <ul>
            {
                items.map(
                    (item, id) => <li key={id}>{item}</li>
                )
            }
        </ul>
    </div>
    </>
  )
}

export default UseStateHook
