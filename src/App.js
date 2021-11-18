import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import SignIn from './components/SignIn.js';
import SignUp from './components/SignUp.js';
import MisHuellas from './components/MisHuellas.js';
import Edit from './components/Edit.js'
import HomePage from './components/HomePage.js';
import Minucias from './components/Minucias.js';
import SubirHuellas from './components/SubirHuellas.js';
import TutorialsList from "./components/tutorials-list.component";

import './App.css';


class App extends Component {
  render() {
    return (
    <div className="App">
      <BrowserRouter>
      <Switch>
          <Route path="/Edit">
            <Edit />
          </Route>
          <Route path="/TutorialsList">
            <TutorialsList/>
          </Route>
          <Route path="/HomePage">
            <HomePage />
          </Route>
          <Route path="/SignUp">
            <SignUp />
          </Route>
          <Route path="/Minucias">
            <Minucias/>
          </Route>
          <Route path="/SubirHuellas">
            <SubirHuellas/>
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