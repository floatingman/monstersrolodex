import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: 'Frankenstein'
        },
        {
          name: 'Dracula'
        },
        {
          name: 'Mummy'
        }
      ]
    };
  }
  
  render() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          { this.state.monsters.map(monster => <h1>{ monster.name }</h1>) }
        </p>
        <button onClick={() => this.setState({ string: 'Hello Knuckleheads '})}>Change Text</button>
      </header>
    </div>
  );
  }
}
export default App;
