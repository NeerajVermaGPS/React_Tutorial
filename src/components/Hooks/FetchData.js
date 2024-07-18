import axios from 'axios'
import React, { useEffect, useState } from 'react'
import PostUI from "../HTTPSRqsts/PostUI"

function FetchData() {
    // const [posts, setPosts] = useState([])
    const [post, setPost] = useState({})
    const [id, setId] = useState(1)
    const [btnId, setBtnId] = useState(1)

    useEffect(()=>{
        // axios.get("https://jsonplaceholder.typicode.com/posts")
        axios.get(`https://jsonplaceholder.typicode.com/posts/${btnId}`)
            .then((resp) =>{
                // setPosts(resp.data)
                setPost(resp.data)
                console.log(resp.data)
            })
            .catch((e) => {
                console.log(e)
            })
    }, [btnId])

  return (
    <div>
        <input type="text" value={id} onChange={e => setId(e.target.value)}/>
        <button onClick={() => {setBtnId(id)}}>Fetch Post with id: {id}</button>
        <PostUI key={post["id"]} userId={post["userId"]} title={post["title"]} post={post["body"]}/>
      {/* {posts.map(postE => <PostUI key={postE["id"]} userId={postE["userId"]} title={postE["title"]} post={postE["body"]}/>)} */}
    </div>
  )
}

export default FetchData
