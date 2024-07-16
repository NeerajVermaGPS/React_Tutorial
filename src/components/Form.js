import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username: "",
         comment: "",
         topic: "react"
      }
    }

    handleUsername = event => {
        this.setState({
            username: (event.target.value)
        })
    }

    handleComment = event => {
        this.setState({
            comment: (event.target.value)
        })
    }
    
    handleTopic = event => {
        this.setState({
            topic: (event.target.value)
        })
    }

    handleSubmit = e => {
        const formData = e.target;
        const fd = new FormData(formData);
        const jfd = JSON.stringify(Object.fromEntries(fd));
        console.log(jfd)
        e.preventDefault()
    }
  render() {
    const { username, topic, comment } = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
            <label htmlFor="username">Name:</label>
            <input type="text" name="username" id="username" value={username} onChange={this.handleUsername}/>
        </div>
        <div>
            <label htmlFor="topic">Topic:</label>
            <select name="topic" id="topic" value={topic} onChange={this.handleTopic}>
                <option value="react">React</option>
                <option value="vue">Vue</option>
                <option value="angular">Angular</option>
            </select>
        </div>
        <div>
            <label htmlFor="comment">Comments:</label>
            <textarea name="comment" id="comment" value={comment} onChange={this.handleComment}></textarea>
        </div>
        <div>
            <button type='submit'>Submit</button>
        </div>
      </form>
    )
  }
}

export default Form
