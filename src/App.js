import React, { Component } from 'react';
import './App.css';

/*React Components*/
import Tile from "./Tile.js";
/*Scripts*/
import addControls from "./js/controls.js";
class App extends Component {
  constructor(){
    super();
    this.state = {
      test:"working",
      highscore:0
    }
  }
  componentDidMount = () =>{
    addControls(this);
  }
  render() {
    return (
      <div className="App">
        <label className="high-score-lable">High Score : {this.state.highscore}</label>
        <div className="Grid">
          <Tile className="col-0 row-0 tile" />
          <Tile className="col-1 row-1 tile" />
          <Tile className="col-2 row-2 tile" />
          <Tile className="col-3 row-3 tile" />
          <Tile className="col-0 row-0 tile" />
          <Tile className="col-1 row-1 tile" />
          <Tile className="col-2 row-2 tile" />
          <Tile className="col-3 row-3 tile" />
          <Tile className="col-0 row-0 tile" />
          <Tile className="col-1 row-1 tile" />
          <Tile className="col-2 row-2 tile" />
          <Tile className="col-3 row-3 tile" />
          <Tile className="col-0 row-0 tile" />
          <Tile className="col-1 row-1 tile" />
          <Tile className="col-2 row-2 tile" />
          <Tile className="col-3 row-3 tile" />
        </div>
      </div>
    );
  }
}

export default App;
