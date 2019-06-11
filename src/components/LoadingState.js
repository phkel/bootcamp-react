import React, { Component } from 'react';
import '../styles/spinner.css';

class LoadingState extends Component {
  render() {
    return (
      <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
      );
  }
}

export default LoadingState;
