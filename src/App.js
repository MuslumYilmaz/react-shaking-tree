import React, {Component} from 'react';
import './App.css';
import Apples from './Apples.js';

class App extends Component {
  state = {
    apples: [
      {id: 0, src: './apple.png', class: "apple"},
      {id: 1, src: './apple.png', class: "apple"},
      {id: 2, src: './apple.png', class: "apple"},
      {id: 3, src: './apple.png', class: "apple"},
      {id: 4, src: './apple.png', class: "apple"},
      {id: 5, src: './apple.png', class: "apple"},
      {id: 6, src: './apple.png', class: "apple"}
    ]
  }
  randomApple = () => {
    let index = Math.floor(Math.random() * 2);  // create a random index for apple array
    console.log(index);
    let arr = this.state.apples.filter(apple => apple.id === index);
  
    return arr;
  }

  counter = () => {
    let arr = this.randomApple();

    arr.forEach(el => {
      var interval = setInterval(() => { 
        console.log(arr);
        el.drop--;
        if (el.drop <= -100) {
          clearInterval(interval);
        }
      }, 25)
    });
  }

  test = () => {
    // generate a random number less than array index so dropped appples will differ each time we run the function
    let count =  Math.floor(Math.random() * 5) + 1; // add +1 so dropped apple number will be always more than one
    let apples = [...this.state.apples];

      while (count <= apples.length) {
        let index = Math.floor(Math.random() * 6); // create a random index for apple array
        apples.forEach(el => {
          if (el.id === index) {
            el.class = "apple-drop";
            count += 1;
            console.log(el);
          }
        })
      }


    this.setState({
      apples  
    })
  }

  render() {
    return (
      <div className="App">
        <h1 className="center blue-text">Todos</h1>
        <Apples apples={this.state.apples} />
        <button onClick={this.randomApple}>Shake the tree!</button>
        <button onClick={this.test}>Counter</button>
      </div>
    );
  }
}

export default App;
