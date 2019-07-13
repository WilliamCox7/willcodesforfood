import React, { Component } from 'react';
import Nav from '../../components/Nav';
// import CodeBlock from '../../components/CodeBlock';
// import ExperienceStruck from '../../components/ExperienceStruck';
import ExperienceGraphix from '../../components/ExperienceGraphix';
import ExperienceDevMtn from '../../components/ExperienceDevMtn';
import ExperienceCStep from '../../components/ExperienceCStep';
import Technologies from '../../components/Technologies';
import About from '../../components/About';
import './style.scss';

class Home extends Component {
  render() {
    return (
      <div id="Home">
        <Nav />
        <div className="container">
          <div className="top-space"></div>
          {/* <CodeBlock /> */}
          <h1 className="experience-header">Relevant Work Experience</h1>
          <ExperienceGraphix />
          <ExperienceCStep />
          {/* <ExperienceStruck /> */}
          <ExperienceDevMtn />
          <Technologies />
          <About />
        </div>
      </div>
    );
  }
}

export default Home;
