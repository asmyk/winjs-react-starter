/**
 * App entry point 
 */

// Polyfill
import 'babel-polyfill';

// Libraries
import React from 'react';
import WinJS from "winjs";
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';

// Routes
import Routes from './common/components/Routes';

// Base styling
import './common/base.css';


// ID of the DOM element to mount app on
const DOM_APP_EL_ID = 'app';
// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232509


// Render the router
let renderRouter = function () {
  ReactDOM.render((
    <Router history={browserHistory}>
      {Routes}
    </Router>
  ), document.getElementById(DOM_APP_EL_ID));
}

export default renderRouter;
