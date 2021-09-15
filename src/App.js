import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import SignIn from './components/SignIn.js';
import SignUp from './components/SignUp.js';
<<<<<<< HEAD
import MisHuellas from './components/MisHuellas.js';
import Edit from './components/Edit.js'
=======
import HomePage from './components/HomePage.js';
>>>>>>> 2a6a13e082de81c209246049ebb3959ac8b61493

import './App.css';


class App extends Component {
  render() {
    return (
    <div className="App">
      <BrowserRouter>
      <Switch>
<<<<<<< HEAD
          <Route path="/">
            <Edit />
          </Route>
          <Route path="/MisHuellas">
            <MisHuellas />
=======
          <Route path="/HomePage">
            <HomePage />
>>>>>>> 2a6a13e082de81c209246049ebb3959ac8b61493
          </Route>
          <Route path="/SignUp">
            <SignUp />
          </Route>
          <Route path="/SignIn">
            <SignIn />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
    );
  }
}

export default App;