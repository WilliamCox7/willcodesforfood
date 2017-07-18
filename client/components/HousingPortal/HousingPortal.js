import React, { Component } from 'react';
import './HousingPortal.scss';

class HousingPortal extends Component {
  render() {
    return (
      <div className="HousingPortal">
        <iframe className="iframe" src="https://storage.googleapis.com/calcium-potential-2559/index.html#/"></iframe>
        <a href="/#/" className="back-button"><p>Go Back</p></a>
      </div>
    );
  }
}

export default HousingPortal;
