import React, { Component } from 'react';
import getAsset from '../../modules/get-asset';
import './style.scss';

class CodeBlock extends Component {
  render() {
    return (
      <div id="CodeBlock" className="flex ai-c jc-c">
        <div className="code-box">
          <div>
            <span className="blue">const </span>
            <span className="black">mtDew</span>
            <span className="orange"> = </span>
            <span className="red">true</span>
            <span className="black">;</span>
          </div>
          <div>
            <span className="blue">const </span>
            <span className="black">alive </span>
            <span className="orange"> = </span>
            <span className="green">'sure'</span>
            <span className="black">;</span>
          </div>
          <br />
          <div>
            <span className="orange">while </span>
            <span className="black">(alive) &#123;</span>
          </div>
          <div>
            <span className="green">&#160;&#160;eat</span>
            <span className="black">();</span>
          </div>
          <div>
            <span className="green">&#160;&#160;sleep</span>
            <span className="black">();</span>
          </div>
          <div>
            <span className="green">&#160;&#160;code</span>
            <span className="black">();</span>
          </div>
          <div>
            <span className="black">&#125;</span>
          </div>
        </div>
        <div className="scroll-down-icon">
        <img src={getAsset('scrolldown')} />
        </div>
      </div>
    );
  }
}

export default CodeBlock;
