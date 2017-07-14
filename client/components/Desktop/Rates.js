import React, { Component } from 'react';

class Rates extends Component {
  render() {
    return (
      <div className="Rates">
        <h1>My Rates</h1>
        <div className="break"></div>
        <p className="rates-intro">
          Due to high demand, I am currently charging the following hourly
          rates. These are subject to change based on my availability. Feel
          free to contact me with any questions.
        </p>
        <div className="break"></div>
        <div className="plans">
          <div className="plan">
            <h2>Basic</h2>
            <div className="rate">
              $38/hr
            </div>
            <div className="details">
              <p>
                I will design both the UI (user interface) and UX (user
                experience) on my own in addition to programming your application.
                You will be updated weekly.
              </p>
            </div>
          </div>
          <div className="plan">
            <h2>Premium</h2>
            <div className="rate">
              $54/hr
            </div>
            <div className="details">
              <p>
                I will hire a professional designer to handle the UI/UX. This
                is typically easier and more efficient for me. You will be
                updated weekly.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Rates;
