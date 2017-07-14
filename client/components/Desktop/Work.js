import React, { Component } from 'react';
import DevMountain from './DevMountain';
import Commons from './Commons';

class Work extends Component {
  render() {
    return (
      <div className="Work">
        <h1>My Work</h1>
        <div className="break"></div>
        <DevMountain />
        <div className="break"></div>
        <Commons />
      </div>
    );
  }
}

export default Work;
