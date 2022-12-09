import { Component } from 'react';
import React from 'react';
import './ErrorBoundary.css';
class ErrorBoundary extends Component {
  state = {
    error: false,
  };

  componentDidCatch(err, info) {
    console.log(err, info);
    this.setState({ error: true });
  }

  render() {
    if (this.state.error) { 
      return <h2>Error!</h2>;
    }
    return React.Children.map(this.props.children, (item, i) => {
      return React.cloneElement(item, { clazz: 'bordered10'});
    
    });
  }
}

export default ErrorBoundary;
