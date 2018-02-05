import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom'
import { Switch } from 'react-router'
import Layout from '@client/page/layout/Main.jsx';

export default () =>
  <Router>
    <Switch>
      <Route path="/" component={Layout} />
    </Switch>
  </Router>
