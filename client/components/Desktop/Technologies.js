import React, { Component } from 'react';
import amazon from '../../img/amazon.svg'; import android from '../../img/android.svg';
import angular from '../../img/angular.svg'; import apache from '../../img/apache.svg';
import babel from '../../img/babel.svg'; import bootstrap from '../../img/bootstrap.svg';
import bower from '../../img/bower.svg'; import c from '../../img/c.svg';
import ccs3 from '../../img/ccs3.svg'; import cplusplus from '../../img/cplusplus.svg';
import csharp from '../../img/csharp.svg'; import d3 from '../../img/d3.svg';
import dotnet from '../../img/dotnet.svg'; import git from '../../img/git.svg';
import github from '../../img/github.svg'; import grunt from '../../img/grunt.svg';
import gulp from '../../img/gulp.svg'; import heroku from '../../img/heroku.svg';
import html5 from '../../img/html5.svg'; import illustrator from '../../img/illustrator.svg';
import java from '../../img/java.svg'; import javascript from '../../img/javascript.svg';
import jquery from '../../img/jquery.svg'; import less from '../../img/less.svg';
import linux from '../../img/linux.svg'; import mongodb from '../../img/mongodb.svg';
import mysql from '../../img/mysql.svg'; import node from '../../img/node.svg';
import photoshop from '../../img/photoshop.svg'; import php from '../../img/php.svg';
import postgres from '../../img/postgres.svg'; import react from '../../img/react.svg';
import salesforce from '../../img/salesforce.svg'; import sass from '../../img/sass.svg';
import vim from '../../img/vim.svg'; import webpack from '../../img/webpack.svg';
var blank = 'blank';

const svgs = [
  amazon, android, blank, blank, blank, blank, angular, apache, babel, bootstrap, bower, c,
  blank, ccs3, cplusplus, blank, csharp, d3, blank, dotnet, git, blank, blank, github, grunt,
  gulp, heroku, html5, blank, illustrator, java, blank, javascript, blank, jquery, less, linux,
  mongodb, mysql, node, blank, photoshop, php, postgres, blank, react, salesforce, sass, blank,
  vim, webpack
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
    if (width+margin < 850) { hexWidth = 87; }
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
        tempArray.push(blank);
      }
      newTechs.push(tempArray);
    }
    this.setState({techs: newTechs, width: width});
  }

  render() {

    var rows = [], marginLeft = -70;
    if (this.state.width+200 < 834) { marginLeft = -44; }
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
          var toolTipText = tech.split("/static/media/")[1].split(".")[0];
          hexes.push(
            <div className="hex" key={j}>
              <div className="hex-top"></div>
              <div className="hex-mid"><img src={tech} /></div>
              <div className="hex-bot"></div>
              <span>{toolTipText}</span>
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
      <div className="Technologies">
        <h1>Technologies I've Used</h1>
        <div className="break"></div>
        <div className="tech-container" style={{width: this.state.width}}>
          {rows}
        </div>
      </div>
    );
  }
}

export default Technologies;
