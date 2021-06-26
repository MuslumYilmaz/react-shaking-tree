import React, {Component} from 'react';
import './App.css';
import Apples from './Apples.js';
import Basket from './Basket.js';

class App extends Component {
  state = {
    apples: [
      {id: 0, src: './apple.png', class: ""},
      {id: 1, src: './apple.png', class: ""},
      {id: 2, src: './apple.png', class: ""},
      {id: 3, src: './apple.png', class: ""},
      {id: 4, src: './apple.png', class: ""},
      {id: 5, src: './apple.png', class: ""}
    ],
    appleClass: "apples",
    appleCount: 0
  }

  dropApple = () => {
    // generate a random number less than array index so dropped appples will differ each time we run the function
    let count =  Math.floor(Math.random() * 4) + 1; // add +1 so dropped apple number will be always more than one
    let apples = [...this.state.apples];
    let arr = [];

        const interval = setInterval(() => {
          if (count <= apples.length) {
            let index = Math.floor(Math.random() * 5); // create a random index for apple array

            apples[index].class = "apple-drop";
            arr.push(apples[index]);
            count++;
            console.log(apples[index]);
            
            // set state after each apple dropped
            this.setState({
              apples
            });

            // remove duplicates from dropped apples
            let uniqueArray = arr.filter((item, pos) => arr.indexOf(item) === pos);

            this.setState({
              appleCount: uniqueArray.length 
            });
            } else {
            clearInterval(interval);
            }
            }, 1000);
  }

  shake = () => {
    this.setState({
      appleClass: "shake-tree"
    })

    setTimeout(() => {
      this.dropApple();
    }, 3000);
  }

  render() {
    return (
      <div className="App">
        <div className="first-group">
        <button className="shake-button" onClick={this.shake}>Shake the tree!</button>
        <Basket appleCount={this.state.appleCount} />
        </div>
        <div className="second-group">
        <Apples shakeClass={this.state.appleClass} apples={this.state.apples} />
        </div>

      </div>
    );
  }
}

export default App;
