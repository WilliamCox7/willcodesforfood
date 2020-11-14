import React, { Component } from 'react';
import getAsset from '../../modules/get-asset';
import './style.scss';

class ExperienceCStep extends Component {
  render() {
    return (
      <div id="ExperienceCStep">
        <div className="header-spacing"></div>
        <div className="flex jc-sb">
          <h1 className="experience-subheader">Career Step</h1>
          <h1 className="experience-subheader">Angular.js / Node.js</h1>
        </div>
        <div className="copy-spacing"></div>
        <p className="experience-copy">
          Career Step provides an online education experience for those who are looking to certify in 
          certain programs. I was there to manage 20+ backend services (node.js) and 15+ frontend 
          static sites (angular.js). Their platform now consists of a microservice architecture that 
          I transferred from our old legacy platform.
        </p>
        <ul className="copy-list">
          <li>• Built complex user interfaces such as the image displayed below.</li>
          <li>• Created in-house software to help Career Step employees do their jobs with ease.</li>
        </ul>
        <div className="content-spacing"></div>
        <div className="content flex jc-sb">
          <div className="item-box">
            <iframe src="https://careerstep.com"></iframe>
          </div>
        </div>
      </div>
    );
  }
}

export default ExperienceCStep;
