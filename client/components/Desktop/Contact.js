import React, { Component } from 'react';
import send from '../../img/send.svg';

class Contact extends Component {
  render() {
    return (
      <div className="Contact">
        <h1>Contact Me</h1>
        <div className="break"></div>
        <div className="form">
          <input type="text" placeholder="name" />
          <input type="text" placeholder="email" />
          <textarea placeholder="message"></textarea>
          <img src={send} />
        </div>
        <div className="last-break"></div>
      </div>
    );
  }
}

export default Contact;
