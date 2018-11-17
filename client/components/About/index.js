import React, { Component } from 'react';
import getAsset from '../../modules/get-asset';
import './style.scss';

class About extends Component {
  render() {
    return (
      <div id="About">
        <div className="header-spacing"></div>
        <h1 className="about-header">About Me</h1>
        <div className="info-spacing"></div>
        <div className="about-info">
          <div className="moab-wrapper">
            <img className="moab" src={getAsset('moab', 'jpg')} />
          </div>
          <img className="will" src={getAsset('will', 'jpg')} />
          <div className="about-para">
            <p>
              I am a Utah native that enjoys watching/playing sports, the
              outdoors, and anything computer related. Moab is a frequent
              destination for me and my FJ Cruiser. I like testing it out
              on the landscape and scaring myself from time to time. I also
              bring along my Nikon just in case I run into anything spectacular.
            </p>
            <p>
              As a developer, I have worked on a wide variety of projects. From
              Android app development in Android studio to Visual Basic
              Applications for excel and Microsoft office. I currently am
              focusing on web development using the Angular frameworks or
              React libraries.
            </p>
          </div>
        </div>
        <video loop muted controls>
          <source src="https://williamcox7.github.io/portfolio/fjvid.mp4" type="video/mp4"/>
        </video>
      </div>
    );
  }
}

export default About;
