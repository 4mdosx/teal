import React from 'react'

class PageError extends React.Component {
  constructor(props) {
    super(props)
    this.state = { error: undefined }
  }
  static getDerivedStateFromError(error) {
    console.error(error)
    return { error }
  }
  render() {
    return this.props.children
  }
}
export default PageError
