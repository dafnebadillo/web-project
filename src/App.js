import React, { Component } from 'react';
import SignIn from './components/SignIn.js';
import SignUp from './components/SignUp.js';
import MisHuellas from './components/MisHuellas.js';

import './App.css';


class App extends Component {
  render() {
    return (
    <div className="App">
      <MisHuellas/>
    </div>
    );
  }
}

export default App;