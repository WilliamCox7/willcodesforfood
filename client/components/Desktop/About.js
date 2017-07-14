import React, { Component } from 'react';
import moab from '../../img/moab.jpg';
import will from '../../img/will.jpg';

class About extends Component {
  render() {
    return (
      <div className="About">
        <h1>About Me</h1>
        <div className="break"></div>
        <div className="about-info">
          <img className="moab" src={moab} />
          <img className="will" src={will} />
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

      </div>
    );
  }
}

export default About;
