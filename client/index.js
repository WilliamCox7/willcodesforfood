/* PACKAGES */
import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, hashHistory } from "react-router";
import './index.scss';

/* COMPONENTS */
import App from './App';
import HousingPortal from './components/HousingPortal/HousingPortal';
import CommonsApp from './components/CommonsApp/CommonsApp';
import CareerStep from './components/CareerStep/CareerStep';
import Desktop from './components/Desktop/Desktop';

/* ROUTES */
ReactDOM.render (
  <Router history={hashHistory}>
    <Route component={App}>
      <Route path="/" component={Desktop} />
      <Route path="/housing-portal" component={HousingPortal} />
      <Route path="/commons-app" component={CommonsApp} />
      <Route path="/careerstep" component={CareerStep} />
    </Route>
  </Router>
  , document.getElementById('root')
);
