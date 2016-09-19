import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App';
import DetailsPage from '../../pages/details/page';
import HomePage from '../../pages/home/page';


export default (
  <Route component={App}>
    <Route path="/" component={HomePage} />
    <Route path="/build/app_index.html" component={HomePage} />

    <Route path="/details" component={DetailsPage} />
  </Route>
);
