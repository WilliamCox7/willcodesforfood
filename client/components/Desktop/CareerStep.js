import React, { Component } from 'react';
import frame from '../../img/laptop-frame-careerstep.png';
import amazon from '../../img/amazon.svg';
import mysql from '../../img/mysql.svg';
import node from '../../img/node.svg';
import angular from '../../img/angular.svg';
import salesforce from '../../img/salesforce.svg';
import sass from '../../img/sass.svg';

class DevMountain extends Component {
  render() {
    return (
      <div className="DevMountain">
        <div className="right-side">
          <h2>Hired by Career Step...</h2>
          <p>
            At Career Step, I manage around 20 static
            websites and software services. One of them
            being their main site. Much of what you see
            on the home page was updated by me including
            the navigation at the top.
          </p>
          <p>
            The enviornment that I work in for the Career
            Step website is Angular.js. CSS is processed
            with SASS and the backend is built in Node.js
            and MySQL. Much of the website is connected to
            Salesforce and our other software services.
          </p>
          <div className="technologies">
            <img src={amazon} />
            <img src={mysql} />
            <img src={node} />
            <img src={angular} />
            <img src={salesforce} />
            <img src={sass} />
          </div>
        </div>
        <div className="left-side">
          <img className="frame" src={frame} />
          <span>
            <a href="/#/careerstep">View Career Step Website</a>
          </span>
        </div>
      </div>
    );
  }
}

export default DevMountain;
