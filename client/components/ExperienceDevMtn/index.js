import React, { Component } from 'react';
import getAsset from '../../modules/get-asset';
import MediaQuery from 'react-responsive';
import './style.scss';

class ExperienceDevMtn extends Component {
  render() {
    return (
      <div id="ExperienceDevMtn">
        <div className="header-spacing"></div>
        <div className="flex jc-sb">
          <h1 className="experience-subheader">DevMountain</h1>
          <h1 className="experience-subheader">React.js / Node.js</h1>
        </div>
        <div className="copy-spacing"></div>
        <p className="experience-copy">
          Immediately after graduating from DevMountain (a coding bootcamp in Provo, UT), 
          I was hired to develop their housing portal. DevMountain offers free housing while 
          you attend and they were in need of a management system. 
        </p>
        <ul className="copy-list">
          <li>• Chose to learn a new framework (React.js) to my skillset</li>
        </ul>
        <div className="content-spacing"></div>
        <div className="content flex jc-sb">
          <MediaQuery minWidth={1200}>
            <div className="item-box">
              <iframe src="https://powerful-sands-79627.herokuapp.com/#/"></iframe>
            </div>
          </MediaQuery>
          <MediaQuery maxWidth={1199}>
            <div className="item-box">
              <img src={getAsset('devmtn1', 'png')} />
            </div>
          </MediaQuery>
        </div>
      </div>
    );
  }
}

export default ExperienceDevMtn;
