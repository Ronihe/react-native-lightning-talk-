import React, { Component } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import Refactor from './Refactor';
import Work from './Work';
class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact render={() => <Work />} />
        <Route path="/Refactor" exact render={() => <Refactor />} />
        <Redirect to="/" />
      </Switch>
    );
  }
}
export default Routes;
