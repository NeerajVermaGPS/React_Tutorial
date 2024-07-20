import axios from 'axios'
import React, { useEffect, useReducer, useState } from 'react'
import PostUI from '../HTTPSRqsts/PostUI'

const initialState = {
    error: "",
    post: {},
    loading: true
}

const reducer = (state, action) => {
    switch(action.type){
        case "success":
            return {
                error: "",
                post: action.posts,
                loading: false
            }
        case "failure":
            return {
                error: action.error,
                post: {},
                loading: false
            }
        case "btnClick":
            return {
                ...state,
                error: "",
                loading: true
            }
        default: 
            return state
    }
}

function FetchDataTwo() {
    const [state, setState] = useReducer(reducer, initialState)
    const [id, setId] = useState(1)
    const [btnId, setBtnId] = useState(1)

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${btnId}`)
        .then((resp) => {
            setState({type: "success", posts: resp.data, error: ""})
            console.log(resp.data)
        })
        .catch(e => {
            setState({type: "failure", posts: {}, error: e.message})
        })
    }, [btnId])
  return (
    <div>
      <input type="text" value={id} onChange={e => setId(e.target.value)}/>
      <button onClick={() => {setBtnId(id); setState({type: "btnClick"})}}>Fetch Post with id: {id}</button>
      {state.error !== "" ? <p>Error occured: {state.error}</p> : ""}
      {state.loading ? <p>Loading</p> : <PostUI key={state.post["id"]} userId={state.post["userId"]} title={state.post["title"]} post={state.post["body"]}/>}
    </div>
  )
}

export default FetchDataTwo
