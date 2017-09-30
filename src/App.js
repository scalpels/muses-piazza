import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
 
 componentDidMount() {
    const self = this;
    const url = 'https://api.github.com/search/repositories?q=javascript&sort=stars';
   fetch(url).then(function(response) {
      return response.json()
      }).then(function(json) {
        console.log('parsed json', json)
      }).catch(function(ex) {
        console.log('parsing failed', ex)
      });

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Muses Piazza</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
