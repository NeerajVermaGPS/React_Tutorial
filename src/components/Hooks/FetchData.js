import axios from 'axios'
import React, { useEffect, useState } from 'react'
import PostUI from "../HTTPSRqsts/PostUI"

function FetchData() {
    // const [posts, setPosts] = useState([])
    const [post, setPost] = useState({})
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)
    const [id, setId] = useState(1)
    const [btnId, setBtnId] = useState(1)

    useEffect(()=>{
        // axios.get("https://jsonplaceholder.typicode.com/posts")
        axios.get(`https://jsonplaceholder.typicode.com/posts/${btnId}`)
            .then((resp) =>{
                // setPosts(resp.data)
                setError("")
                setLoading(false)
                setPost(resp.data)
                console.log(resp.data)
            })
            .catch((e) => {
                setError(e.message)
                setLoading(false)
                setPost({})
                console.log(e)
            })
    }, [btnId])

  return (
    <div>
        <input type="text" value={id} onChange={e => setId(e.target.value)}/>
        <button onClick={() => {setBtnId(id); setLoading(true); setError("")}}>Fetch Post with id: {id}</button>
        {error !== ""? <p>Error occured: {error}</p> : ""}
        {loading ? <p>Loading Data</p> : <PostUI key={post["id"]} userId={post["userId"]} title={post["title"]} post={post["body"]}/>}
      {/* {posts.map(postE => <PostUI key={postE["id"]} userId={postE["userId"]} title={postE["title"]} post={postE["body"]}/>)} */}
    </div>
  )
}

export default FetchData
