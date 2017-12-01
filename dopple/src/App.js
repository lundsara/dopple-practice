import React, { Component } from 'react';
import './App.css';
import firebase, { auth, provider } from './firebase';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Redirect, Switch } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1 className="title">Dopplegangers</h1>
        </header>

      </div>
    );
  }
}

export default App;
