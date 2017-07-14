import React, { Component } from 'react';
import Landing from './Landing';
import Work from './Work';
import Technologies from './Technologies';
import About from './About';
import Rates from './Rates';
import Contact from './Contact';
import linkedin from '../../img/linkedin.svg';
import github from '../../img/github.svg';
import $ from 'jquery';
import './Desktop.scss';

class Desktop extends Component {

  componentDidMount() {
    $(document).ready(function() {
      var media = $('video').not("[autoplay='autoplay']");
      var tolerancePixel = 40;
      function checkMedia() {
        var scrollTop = $(window).scrollTop() + tolerancePixel;
        var scrollBottom = $(window).scrollTop() + $(window).height() - tolerancePixel;
        media.each(function(index, el) {
          var yTopMedia = $(this).offset().top;
          var yBottomMedia = $(this).height() + yTopMedia;
          if(scrollTop < yBottomMedia && scrollBottom > yTopMedia){
            $(this).get(0).play();
          } else {
            $(this).get(0).pause();
          }
        });
      }
      $(document).on('scroll', checkMedia);
    });
  }

  render() {
    return (
      <div className="Desktop">
        <Landing />
        <div className="break"></div>
        <Work />
        <div className="break"></div>
        <Technologies />
        <div className="break"></div>
        <About />
        <video loop muted>
          <source src="https://williamcox7.github.io/portfolio/fjvid.mp4" type="video/mp4"/>
        </video>
        <div className="break"></div>
        <Rates />
        <div className="break"></div>
        {/* <Contact /> */}
        <div className="break"></div>
        <div id="my-info-bottom" className="my-info">
          <span className="my-info-left">
            <p>William Cox</p>
          </span>
          <span className="my-info-right">
            <a href="https://www.linkedin.com/in/william-cox/" target="_blank"><img src={linkedin} /></a>
            <a href="https://github.com/WilliamCox7" target="_blank"><img src={github} /></a>
            <a className="email" href="mailto:willubyu7@gmail.com">
              willubyu7@gmail.com
            </a>
            <p>435-535-6811</p>
          </span>
        </div>
      </div>
    );
  }
}

export default Desktop;
