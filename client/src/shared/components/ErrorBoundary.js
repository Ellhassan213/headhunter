import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ErrorBoundary extends Component {
  constructor (props) {
    super(props)
    this.state = { error: null, errorInfo: null }
  }

  componentDidCatch (error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    })
  }

  render () {
    if (this.state.errorInfo) {
      return (
      <div>
        <h2>Something went wrong.</h2>
        <details>
          {this.state.error && this.state.error.toString()}
          <hr />
          {this.state.errorInfo.componentStack}
        </details>
      </div>
      )
    }
    return this.props.children
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired
}

export default ErrorBoundary
