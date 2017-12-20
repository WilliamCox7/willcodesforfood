import React, { Component } from 'react';
import './CareerStep.scss';

class CareerStep extends Component {
  render() {
    return (
      <div className="CareerStep">
        <iframe className="iframe" src="https://careerstep.com"></iframe>
        <a href="/#/" className="back-button"><p>Go Back</p></a>
      </div>
    );
  }
}

export default CareerStep;
