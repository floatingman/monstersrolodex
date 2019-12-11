import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: 'Frankenstein',
          id: 'asc1'
        },
        {
          name: 'Dracula',
          id: 'asr2'

        },
        {
          name: 'Mummy',
          id: 'asl1'
        }
      ]
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
  }
  
  render() {
  return (
    <div className="App">
          { this.state.monsters.map(monster => <h1 key={monster.id}>{ monster.name }</h1>) }
    </div>
  );
  }
}
export default App;
