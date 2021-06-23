import React, {Component} from 'react';
import './App.css';
import Apples from './Apples.js';

class App extends Component {
  state = {
    apples: [
      {id: 1, src: './apple.png'},
      {id: 2, src: './apple.png'},
    ]
  }
  randomApple = () => {
    let index = Math.floor(Math.random() * 10);  // create a random index for apple array
    console.log(index);
  } 
  render() {
    return (
      <div className="App">
        <h1 className="center blue-text">Todos</h1>
        <Apples apples={this.state.apples} />
        <button onClick={this.randomApple}>Shake the tree!</button>
      </div>
    );
  }
}

export default App;
