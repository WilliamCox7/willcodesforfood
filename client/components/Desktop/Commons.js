import React, { Component } from 'react';
import react from '../../img/react.svg';
import phonePortrait from '../../img/phone-portrait2.png';
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
            by my go-to Web Designer, <a href="https://jakenning.com/#/" target="_blank">Jake Kenning</a>.
          </p>
          <p>
            I built this app using React w/Redux in order to help me learn
            React Native. It was helpful for me to transition from the code
            I had already written to the modified version that React Native is.
          </p>
          <a href="/#/commons-app">View Commons App</a><span className="only"> (better on mobile)</span>
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
