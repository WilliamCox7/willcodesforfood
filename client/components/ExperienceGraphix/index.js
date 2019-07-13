import React, { Component } from 'react';
import getAsset from '../../modules/get-asset';
import './style.scss';

class ExperienceGraphix extends Component {
  render() {
    return (
      <div id="ExperienceGraphix">
        <div className="header-spacing"></div>
        <div className="flex jc-sb">
          <h1 className="experience-subheader">Textile Graphix</h1>
          <h1 className="experience-subheader">React.js / Node.js</h1>
        </div>
        <div className="copy-spacing"></div>
        <p className="experience-copy">
          Textile Graphix hired me on to completely overhaul their website. Provided with
          their new design, I built the site from the ground up. The software
          provides the user with the ability to upload their own design and mass produce
          their shirt.
        </p>
        <ul className="copy-list">
          <li>• Built to handle all major browsers and software platforms.</li>
          <li>• Also built admin panel so they can manage their products. </li>
        </ul>
        <div className="content-spacing"></div>
        <div className="content flex jc-sb">
          <div className="item-box blue-background">
            <img src={getAsset('graphix1', 'png')} />
          </div>
          <div className="item-box-spacing"></div>
          <div className="item-box blue-background">
            <img src={getAsset('graphix2', 'png')} />
          </div>
          <div className="item-box-spacing"></div>
          <div className="item-box blue-background">
            <img src={getAsset('graphix3', 'png')} />
          </div>
        </div>
      </div>
    );
  }
}

export default ExperienceGraphix;
