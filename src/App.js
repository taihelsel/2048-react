import React, { Component } from 'react';
import './App.css';

/*React Components*/
import Tile from "./Tile.js";
class App extends Component {
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
