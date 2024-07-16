import axios from 'axios'
import React, { Component } from 'react'

class CreatePost extends Component {
    constructor(props) {
    super(props)

    this.state = {
        uid: 0,
        title: "Post Title Here",
        post: "Post Here"
    }

    // this.handlePost = this.handlePost.bind(this)
    // this.handleTitle = this.handleTitle.bind(this)
    // this.handleUId = this.handleUId.bind(this)
    this.handleInputs = this.handleInputs.bind(this) // Use this one instead of above three functions

    this.handleForm = this.handleForm.bind(this)
    }

    // handleUId = (e) => {
    //     this.setState({
    //        uid: e.target.value
    //     })
    // }
    // handlePost = (e) => {
    //     this.setState({
    //        post: e.target.value
    //     })
    // }
    // handleTitle = (e) => {
    //     this.setState({
    //        title: e.target.value
    //     })
    // }

    handleInputs = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleForm = (e) => {
        const fd = e.target
        const formData = new FormData(fd)
        const jsfd = JSON.stringify(Object.fromEntries(formData))
        console.log(jsfd)
        axios.post("https://jsonplaceholder.typicode.com/posts", jsfd)
            .then((resp)=> {
                console.log(resp)
            })
            .catch((e) => {
                console.log(e)
            })
        e.preventDefault()
    }

  render() {
    return (
      <form onSubmit={this.handleForm}>
        <div>
            <label htmlFor="userId">Enter User Id:</label>
            <input type="text" name="userId" id="userId" value={this.state.uid} onChange={this.handleInputs}/>
        </div>
        <div>
            <label htmlFor="postTitle">Enter Title:</label>
            <input type="text" name="postTitle" id="postTitle" value={this.state.title} onChange={this.handleInputs}/>
        </div>
        <div>
            <label htmlFor="postBody">Enter Post:</label>
            <textarea name="postBody" id="postBody" value={this.state.post} onChange={this.handleInputs}></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default CreatePost
