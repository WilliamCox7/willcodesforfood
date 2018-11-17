import React, { Component } from 'react';
import getAsset from '../../modules/get-asset';
import './style.scss';

const svgs = [
  'amazon', 'android', 'blank', 'webpack', 'blank', 'blank', 'angular', 
  'apache', 'babel', 'bootstrap', 'bower', 'c', 'blank', 'ccs3', 
  'cplusplus', 'blank', 'npm', 'nginx', 'blank', 'redis', 'git', 
  'vim', 'blank', 'github', 'apex', 'gulp', 'heroku', 'html5', 
  'blank', 'illustrator', 'java', 'blank', 'javascript', 'blank', 'jquery', 
  'less', 'linux', 'mongodb', 'mysql', 'node', 'blank', 'photoshop', 
  'php', 'postgres', 'blank', 'react', 'salesforce', 'sass', 'blank'
];

class Technologies extends Component {

  constructor(props) {
    super(props);
    this.state = {
      techs: []
    }
    this.wrap = this.wrap.bind(this);
  }

  componentDidMount() {
    window.addEventListener("resize", this.wrap);
    this.wrap();
  }

  wrap() {
    let bodyWidth = document.body.offsetWidth;
    let techContainer = document.getElementById('tech-container');
    let width = techContainer.offsetWidth;
    let hexWidth = bodyWidth > 850 ? 140 : 90;
    let numHexes = Math.round(width / hexWidth) - 1;
    console.log(numHexes);
    
    let svgsShow = svgs;
    if (width < 990) {
      svgsShow = svgsShow.filter((svg) => svg !== 'blank');
    }
    let newTechs = [], i, j;
    for (i = 0, j = svgsShow.length; i < j; i += numHexes) {
      let tempArray = svgsShow.slice(i, i + numHexes);
      while (tempArray.length !== numHexes) {
        tempArray.push('blank');
      }
      newTechs.push(tempArray);
    }
    this.setState({techs: newTechs});
  }

  render() {

    var rows = [];
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

      if (!even) {
        hexes.push(
          <div className="blank" key={`row-${i}`}>
            <div className="blank-top"></div>
            <div className="blank-mid"></div>
            <div className="blank-bot"></div>
          </div>
        );
      }

      rows.push(
        <div className="tech-row flex" key={i}>
          {hexes}
        </div>
      );
    });

    return (
      <div id="Technologies">
        <div className="header-spacing"></div>
        <h1 className="tech-header">Technologies I’m Familiar With</h1>
        <div id="tech-container" className="flex fd-c ai-c">
          {rows}
        </div>
      </div>
    );
  }
}

export default Technologies;
