import React, { Component } from 'react';
import getAsset from '../../modules/get-asset';
import './style.scss';

class ExperienceStruck extends Component {
  render() {
    return (
      <div id="ExperienceStruck">
        <div className="header-spacing"></div>
        <div className="flex jc-sb">
          <h1 className="experience-subheader">Struck</h1>
          <h1 className="experience-subheader">UI / UX</h1>
        </div>
        <div className="copy-spacing"></div>
        <p className="experience-copy">
          Struck was a project I took on in college that turned out to be a great experience. 
          My partner and I spent months planning and designing an app that allowed our users 
          to match their Facebook friends together. Sadly, our app never made it. We had to 
          stop production because Facebook cut any friend information out of their Graph API. 
        </p>
        <ul className="copy-list">
          <li>• Held 4-5 focus groups on BYU campus. Used feedback we recieved to improve the design and determine demand.</li>
          <li>• Searched patent database to see if our idea was unique. Submitted an application for our own patent. </li>
          <li>• Designed the app using Adobe Experience Design (XD) </li>
        </ul>
        <div className="content-spacing"></div>
        <div className="content flex jc-sb">
          <div className="item-box">
            <img src={getAsset('struck1', 'png')} />
          </div>
          <div className="item-box-spacing"></div>
          <div className="item-box purple-background">
            <img src={getAsset('struck2', 'png')} />
          </div>
          <div className="item-box-spacing"></div>
          <div className="item-box purple-background">
            <img src={getAsset('struck3', 'png')} />
          </div>
        </div>
        <div className="asterisk">* logo design by jakekenning@gmail.com</div>
      </div>
    );
  }
}

export default ExperienceStruck;
