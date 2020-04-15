import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from './history';
import Box from './components/Box';
import Form from './components/Form';
import Overview from './components/Overview';

export default function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Box} />
        <Route path="/add" component={Form} />
        <Route path="/overview" component={Overview} />
      </Switch>
    </Router>
  )
}