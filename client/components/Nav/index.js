import React, { Component } from 'react';
import getAsset from '../../modules/get-asset';
import './style.scss';

class Nav extends Component {
  render() {
    return (
      <div id="Nav">
        <div className="container flex jc-sb">
          <div className="my-name flex ai-c">
            William Cox
          </div>
          <div className="icon-links flex jc-fe ai-c">
            <a href="https://www.linkedin.com/in/william-cox" target="_blank">
              <img src={getAsset('linkedin')} />
            </a>
            <a href="https://github.com/WilliamCox7" target="_blank">
              <img src={getAsset('github')} />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Nav;
