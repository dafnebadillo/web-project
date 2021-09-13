import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SignIn from './components/SignIn.js';
import SignUp from './components/SignUp.js';
import './App.css';
import MisHuellas from './components/MisHuellas.js';


class App extends Component {

  render() {
    return (
    <div className="App">
      <SignIn>
        <Switch>
          <Route path="./SignIn" component={SignIn} exact />
        </Switch>
      </SignIn>
    </div>
    );
  }
}

export default App;