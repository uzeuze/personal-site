import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import Settings from './components/Settings';
import Profile from './components/Profile';
import NavbarContainer from './containers/NavbarContainer';

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavbarContainer />
          <Switch>
            <Route path="/profile" component={Profile} />
            <Route path="/settings" component={Settings} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default Router;
