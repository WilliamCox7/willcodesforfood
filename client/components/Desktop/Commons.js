import React, { Component } from 'react';
import react from '../../img/react.svg';
import phonePortrait from '../../img/phone-portrait.png';
import phoneLandscape from '../../img/phone-landscape.png';

class Commons extends Component {
  render() {
    return (
      <div className="Commons">
        <div className="left-side">
          <h2>Hired by Local Entrepreneur...</h2>
          <p>
            Commons is a casual dating app that allows you to find
            people in your area that share common interests. Designed
            by my go-to Web Designer, Jake Kenning.
          </p>
          <p>
            I built this app using React Native.
          </p>
          <div className="technologies">
            <img src={react} />
          </div>
        </div>
        <div className="right-side">
          <img className="landscape" src={phoneLandscape} />
          <img className="portrait" src={phonePortrait} />
        </div>
      </div>
    );
  }
}

export default Commons;
