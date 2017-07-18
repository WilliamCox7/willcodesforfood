import React, { Component } from 'react';
import frame from '../../img/laptop-frame.png';
import amazon from '../../img/amazon.svg';
import mongodb from '../../img/mongodb.svg';
import node from '../../img/node.svg';
import react from '../../img/react.svg';
import salesforce from '../../img/salesforce.svg';
import sass from '../../img/sass.svg';
import webpack from '../../img/webpack.svg';

class DevMountain extends Component {
  render() {
    return (
      <div className="DevMountain">
        <div className="left-side">
          <img className="frame" src={frame} />
          {document.body.clientWidth > 800 ? (
            <span>
              <a href="/#/housing-portal">View Housing Portal</a><span className="only"> (only for desktop)</span>
            </span>
          ) : null}
        </div>
        <div className="right-side">
          <h2>Hired by DevMountain...</h2>
          <p>
            DevMountain is a coding bootcamp that
            is rising rapidly in popularity. With campuses
            now in Utah, Arizona, and Texas, they have a
            lot to maintain. They offer free housing for
            their students and hired me to build a housing
            portal so they could manage their properties
            and tenents easily.
          </p>
          <p>
            I built the housing portal using the React.js
            library with react router, webpack, and redux.
            I processed my css with sass and used Node.js
            and MongoDB for my backend. I also paired
            the site with Salesforce using JSforce to
            syncronize their data.
          </p>
          <div className="technologies">
            <img src={amazon} />
            <img src={mongodb} />
            <img src={node} />
            <img src={react} />
            <img src={salesforce} />
            <img src={sass} />
            <img src={webpack} />
          </div>
        </div>
      </div>
    );
  }
}

export default DevMountain;
