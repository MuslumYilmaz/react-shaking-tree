import React, {Component} from 'react';
import './App.css';
import Apples from './Apples.js';
import Basket from './Basket.js';

class App extends Component {
  appleCount = 0;
  state = {
    apples: [
      {id: 0, src: './apple.png', class: "apple"},
      {id: 1, src: './apple.png', class: "apple"},
      {id: 2, src: './apple.png', class: "apple"},
      {id: 3, src: './apple.png', class: "apple"},
      {id: 4, src: './apple.png', class: "apple"},
      {id: 5, src: './apple.png', class: "apple"}
    ],
    appleClass: "apples"
  }

  dropApple = () => {
    // generate a random number less than array index so dropped appples will differ each time we run the function
    let count =  Math.floor(Math.random() * 4) + 1; // add +1 so dropped apple number will be always more than one
    let apples = [...this.state.apples];
    let arr = [];
      while (count <= apples.length) {
        let index = Math.floor(Math.random() * 5); // create a random index for apple array

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

    this.appleCount = uniqueArray.length;

    this.setState({
      apples  
    })
  }

  changeClass = () => {
    
  }

  shake = () => {
    this.setState({
      appleClass: "shake-apples"
    })

    setTimeout(() => {
      this.dropApple();
    }, 3000);
  }

  render() {
    return (
      <div className="App">
        {/* <button className="shake-button" onClick={this.dropApple}>Shake the tree!</button> */}
        <button className="shake-button" onClick={this.shake}>Shake the tree!</button>
        <Apples shakeClass={this.state.appleClass} apples={this.state.apples} />
        <Basket appleCount={this.appleCount} />
      </div>
    );
  }
}

export default App;
