import React, { Component } from 'react';
import Game from './components/Game';
import Rando from './components/Rando';
import './App.css';
import Button from './components/Button'
import BrokenClick2 from './components/BrokenClick2';
import StateClicker from './components/StateClicker';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <StateClicker n={10} />
      </div>
    )
  }
}

export default App;