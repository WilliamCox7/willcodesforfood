import React, { Component } from 'react';
import getAsset from '../../modules/get-asset';
import './style.scss';

const svgs = [
  'amazon', 'android', 'blank', 'blank', 'blank', 'blank', 'angular', 'apache', 'babel', 'bootstrap', 'bower', 'c',
  'blank', 'ccs3', 'cplusplus', 'blank', 'npm', 'nginx', 'blank', 'redis', 'git', 'blank', 'blank', 'github', 'apex',
  'gulp', 'heroku', 'html5', 'blank', 'illustrator', 'java', 'blank', 'javascript', 'blank', 'jquery', 'less', 'linux',
  'mongodb', 'mysql', 'node', 'blank', 'photoshop', 'php', 'postgres', 'blank', 'react', 'salesforce', 'sass', 'blank',
  'vim', 'webpack'
];

class Technologies extends Component {

  constructor(props) {
    super(props);
    this.state = {
      techs: [],
      width: undefined
    }
    this.wrap = this.wrap.bind(this);
  }

  componentDidMount() {
    window.addEventListener("resize", this.wrap);
    this.wrap();
  }

  wrap() {
    var margin = 200;
    if (document.body.clientWidth < 500) { margin = 0; }
    var width = document.body.clientWidth - margin;
    if (width > 1350) { width = 1350; }
    var hexWidth = 140;
    // if (width+margin < 850) { hexWidth = 87; }
    var numHexes = Math.round(width / hexWidth)-1;
    var svgsShow = svgs;
    if (width+margin < 990) {
      svgsShow = svgsShow.filter((svg) => {
        if (svg !== 'blank') { return true; }
      });
    }
    var newTechs = [], i, j;
    for (i = 0, j = svgsShow.length; i < j; i+=numHexes) {
      var tempArray = svgsShow.slice(i, i+numHexes);
      while (tempArray.length !== numHexes) {
        tempArray.push('blank');
      }
      newTechs.push(tempArray);
    }
    this.setState({techs: newTechs, width: width});
  }

  render() {

    var rows = [], marginLeft = -70;
    // if (this.state.width+200 < 834) { marginLeft = -44; }
    this.state.techs.forEach((array, i) => {
      var even, hexes = [];
      if (i % 2 === 0) { even = true; }
      else { even = false; }
      array.forEach((tech, j) => {
        if (tech === 'blank') {
          hexes.push(
            <div className="blank" key={j}>
              <div className="blank-top"></div>
              <div className="blank-mid"></div>
              <div className="blank-bot"></div>
            </div>
          );
        } else {
          hexes.push(
            <div className="hex" key={j}>
              <div className="hex-top"></div>
              <div className="hex-mid"><img src={getAsset(tech)} /></div>
              <div className="hex-bot"></div>
            </div>
          );
        }
      });
      rows.push(
        <div className="tech-row" key={i} style={even ? {
          marginLeft: marginLeft
        } : { marginLeft: Math.abs(marginLeft) }}>
          {hexes}
        </div>
      );
    });

    return (
      <div id="Technologies">
        <div className="header-spacing"></div>
        <h1 className="tech-header">Technologies I’m Familiar With</h1>
        <div className="tech-container" style={{width: this.state.width}}>
          {rows}
        </div>
      </div>
    );
  }
}

export default Technologies;
