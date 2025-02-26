import React, { Component } from 'react'

export class ErrorBoundary extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         hasError: false,
         caughtError: null
      }
    }
    
    static getDerivedStateFromError(error) {
        return {hasError: true}
    }

    componentDidCatch(e, info) {
        console.log(e)
        console.log(info)
    }

  render() {
    if ( this.state.hasError ) {
        return <h1>Something went wrong!</h1>
    }
    return this.props.children
  }
}

export default ErrorBoundary
