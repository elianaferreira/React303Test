import React from 'react';
import './App.css';

class ErrorBoundary extends React.Component {
  constructor (props) {
    super(props)
    this.state = { error: null }
  }

  componentDidCatch (error) {
    this.setState({error: error})
  }

  render () {
    if (this.state.error) {
      return (
        <div className='alert'>
          <strong>Error: </strong> An error has occurred loading the page.
        </div>
      )
    }
    return this.props.children
  }
}
export default ErrorBoundary
