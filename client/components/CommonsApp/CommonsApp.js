import React, { Component } from 'react';
import phone from '../../img/phone-frame.png';
import './CommonsApp.scss';

class CommonsApp extends Component {
  render() {
    return (
      <div className="CommonsApp">
        {document.body.clientWidth > 500 ? (
          <div className="desktop-phone">
            <img src={phone} />
            <iframe className="iframe-desktop" src="https://storage.googleapis.com/xenodochial-xenolalia-4583/index.html#/feed"></iframe>
          </div>
        ) : (
          <iframe className="iframe" src="https://storage.googleapis.com/xenodochial-xenolalia-4583/index.html#/feed"></iframe>
        )}
        <a href="/#/" className="back-button"><p>Go Back</p></a>
      </div>
    );
  }
}

export default CommonsApp;
