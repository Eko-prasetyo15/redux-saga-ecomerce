import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from './history';
import Box from './components/Box';
import Form from './containers/Form';
import Overview from './components/Overview';
import Chart from './components/Chart'

export default function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Box} />
        <Route path="/add" component={Form} />
        <Route path="/overview" component={Overview} />
        <Route path="/chart" component={Chart} />
      </Switch>
    </Router>
  )
}