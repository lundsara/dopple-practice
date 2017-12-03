import React, { Component } from 'react';
import './App.css';
import firebase, { auth, provider } from './firebase';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Redirect, Switch } from 'react-router-dom';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);

    console.log(this.props)

    this.state = {
      username: '',
      user: null,


    };
    // binding functions

    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);


  }



    login() {
    auth.signInWithPopup(provider)
      .then((result) => {
        const user = result.user;
        this.setState({
          user,
        });
      });
  }

  logout() {
    auth.signOut()
      .then(() => {
        this.setState({
          user: null,
        });
      });
}


  render() {
    return (
      <div className="App">
        <header>
          <h1 className="title">Doppelgangers<div className="reverse">Doppelgangers</div></h1>
        </header>

        <img src= "https://cdn.cliqueinc.com/posts/img/uploads/current/images/0/73/817/main.original.640x0c.jpg" />
        <div className="definition">According to age-old German folklore, all living creatures have a spirit double who is invisible but identical to the living individual. These second selves are perceived as being distinct from ghosts (which appear only after death), and sometimes they are described as the spiritual opposite or negative of their human counterparts. In 1796, German writer Johann Paul Richter, who wrote under the pseudonym Jean Paul, coined the word Doppelgänger (from doppel-, meaning "double," and -gänger, meaning "goer") to refer to such specters.</div>

        </div>
    );
  }
}

export default App;
