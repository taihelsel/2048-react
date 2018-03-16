import React, { Component } from 'react';
import './App.css';

/*React Components*/
import Tile from "./Tile.js";
/*Scripts*/
import addControls from "./js/controls.js";
class App extends Component {
  componentDidMount = () =>{
    addControls();
  }
  render() {
    return (
      <div className="App">
        <div className="Grid">
            Grid
            <Tile />
        </div>
      </div>
    );
  }
}

export default App;
