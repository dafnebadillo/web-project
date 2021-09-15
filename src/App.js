import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import SignIn from './components/SignIn.js';
import SignUp from './components/SignUp.js';
import MisHuellas from './components/MisHuellas.js';

import './App.css';


class App extends Component {
  render() {
    return (
    <div className="App">
      <BrowserRouter>
      <Switch>
          <Route path="/MisHuellas">
            <MisHuellas />
          </Route>
          <Route path="/SignUp">
            <SignUp />
          </Route>
          <Route path="/">
            <SignIn />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
    );
  }
}

export default App;