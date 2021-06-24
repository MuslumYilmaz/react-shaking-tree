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

  dropApple = () => {
    // generate a random number less than array index so dropped appples will differ each time we run the function
    let count =  Math.floor(Math.random() * 5) + 1; // add +1 so dropped apple number will be always more than one
    let apples = [...this.state.apples];
    let arr = [];
      while (count <= apples.length) {
        let index = Math.floor(Math.random() * 6); // create a random index for apple array

        apples.forEach(el => {
          if (el.id === index) {
            el.class = "apple-drop";
            console.log(el);
            arr.push(el);
          }
        })
        count++;
      }

      // remove duplicates from dropped apples
      let uniqueArray = arr.filter(function(item, pos) {
        return arr.indexOf(item) === pos;
    })

      console.log(uniqueArray);

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
        <button onClick={this.dropApple}>Counter</button>
      </div>
    );
  }
}

export default App;
