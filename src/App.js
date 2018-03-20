import React, { Component } from 'react';
import './App.css';

/*React Components*/
import Tile from "./Tile.js";
/*Scripts*/
import addControls from "./js/controls.js";
import addTile from "./js/addTile.js";
class App extends Component {
  constructor(){
    super();
    this.state = {
      highscore:0,
      score:0,
      tiles:[{value:0},{value:0},{value:0},{value:0},{value:0},{value:0},{value:0},{value:0},{value:0},{value:0},{value:0},{value:0},{value:0},{value:0},{value:0},{value:0}],
    }
  }
  componentDidMount = () =>{
    this.newGame();
    addControls(this);
  }
  newGame = () => {
    addTile(this);
    addTile(this);
  }
  render() {
    return (
      <div className="App">
        <label className="high-score-lable">High Score : {this.state.highscore}</label>
        <div className="Grid">
          <Tile className="col-0 row-0 tile" value={this.state.tiles[0].value}/>
          <Tile className="col-1 row-1 tile" value={this.state.tiles[1].value}/>
          <Tile className="col-2 row-2 tile" value={this.state.tiles[2].value}/>
          <Tile className="col-3 row-3 tile" value={this.state.tiles[3].value}/>
          <Tile className="col-0 row-0 tile" value={this.state.tiles[4].value}/>
          <Tile className="col-1 row-1 tile" value={this.state.tiles[5].value}/>
          <Tile className="col-2 row-2 tile" value={this.state.tiles[6].value}/>
          <Tile className="col-3 row-3 tile" value={this.state.tiles[7].value}/>
          <Tile className="col-0 row-0 tile" value={this.state.tiles[8].value}/>
          <Tile className="col-1 row-1 tile" value={this.state.tiles[9].value}/>
          <Tile className="col-2 row-2 tile" value={this.state.tiles[10].value}/>
          <Tile className="col-3 row-3 tile" value={this.state.tiles[11].value}/>
          <Tile className="col-0 row-0 tile" value={this.state.tiles[12].value}/>
          <Tile className="col-1 row-1 tile" value={this.state.tiles[13].value}/>
          <Tile className="col-2 row-2 tile" value={this.state.tiles[14].value}/>
          <Tile className="col-3 row-3 tile" value={this.state.tiles[15].value}/>
        </div>
      </div>
    );
  }
}

export default App;
