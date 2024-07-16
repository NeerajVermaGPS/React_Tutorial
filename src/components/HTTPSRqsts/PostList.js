import axios from 'axios'
import React, { Component } from 'react'
import PostUI from './PostUI'

class PostList extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         posts: [],
         errors: null
      }
    }
    
    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then((resp) => {
                this.setState({
                    posts: resp.data
                })
            })
            .catch((error) => {
                this.setState({
                    errors: error
                })
            })
    }

  render() {
    const {posts, errors} = this.state
    const post = this.state.posts.map((x) => <PostUI key={x["id"]} userId={x["userId"]} title={x["title"]} post={x["body"]} />)
    return (
      <div>
        {posts ? post : null} 
        {errors ? <div style={{color: "red"}}>Error while retrieving the data!</div> : null} 
      </div>
    )
  }
}

export default PostList
