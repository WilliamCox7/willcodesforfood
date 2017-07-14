import React, { Component } from 'react';
import detroit from '../../img/detroit.jpg';
import linkedin from '../../img/linkedin.svg';
import github from '../../img/github.svg';

class Landing extends Component {

  constructor(props) {
    super(props);
    this.state = {
      width: document.body.clientWidth,
      height: document.body.clientHeight
    }
    this.getWidth = this.getWidth.bind(this);
    this.getHeight = this.getHeight.bind(this);
  }

  componentDidMount() {
    window.addEventListener("resize", this.getWidth);
    window.addEventListener("scroll", this.getHeight);
  }

  getWidth(e) {
    this.setState({width: e.target.innerWidth});
  }

  getHeight() {
    this.setState({height: window.scrollY});
  }

  render() {
    return (
      <div className="Landing">
        <img className="background-img" src={detroit} />
        {this.state.width > 600 ? (
          <div className="my-info" style={{position: 'absolute'}}>
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
        ) : (
          <div className="my-info" style={this.state.height > 74 ? {
            boxShadow: '0px 0px 6px #eaeaea'
          } : null}>
            <span className="my-info-left">
              <a className="phone" href="tel:4355356811">435-535-6811</a>
              <br></br>
              <a className="email" href="mailto:willubyu7@gmail.com">
                willubyu7@gmail.com
              </a>
            </span>
            <span className="my-info-right">
              <a href="https://www.linkedin.com/in/william-cox/" target="_blank"><img src={linkedin} /></a>
              <a href="https://github.com/WilliamCox7" target="_blank"><img src={github} /></a>
            </span>
          </div>
        )}
        {this.state.width <= 600 ? (<p className="myname">William Cox</p>) : (null)}
      </div>
    );
  }
}

export default Landing;
