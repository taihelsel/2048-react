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
      row:4,
      col:4,
      tiles:(()=>{
        let i = 0;
        let row = 4; //Max rows
        let col = 4; //Max cols
        let rowTracker = 0;
        let colTracker = 0;
        let ceil = row * col;
        const x = [];
        while(i<ceil){
          if(rowTracker < row && i%row === 0 && i > 0){
              rowTracker++;
          }
          if (colTracker >= col) {
            /*rest tracker*/
            colTracker = 0;
          }
          x.push({value:0,col:colTracker,row:rowTracker});
          i++;
          colTracker++;
        }
        return x;
      })(),
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
        <label className="score-lable">Score : {this.state.score}</label>
        <div className="Grid">
          <Tile className="col-0 row-0 tile" value={this.state.tiles[0].value}/>
          <Tile className="col-1 row-0 tile" value={this.state.tiles[1].value}/>
          <Tile className="col-2 row-0 tile" value={this.state.tiles[2].value}/>
          <Tile className="col-3 row-0 tile" value={this.state.tiles[3].value}/>
          <Tile className="col-0 row-1 tile" value={this.state.tiles[4].value}/>
          <Tile className="col-1 row-1 tile" value={this.state.tiles[5].value}/>
          <Tile className="col-2 row-1 tile" value={this.state.tiles[6].value}/>
          <Tile className="col-3 row-1 tile" value={this.state.tiles[7].value}/>
          <Tile className="col-0 row-2 tile" value={this.state.tiles[8].value}/>
          <Tile className="col-1 row-2 tile" value={this.state.tiles[9].value}/>
          <Tile className="col-2 row-2 tile" value={this.state.tiles[10].value}/>
          <Tile className="col-3 row-2 tile" value={this.state.tiles[11].value}/>
          <Tile className="col-0 row-3 tile" value={this.state.tiles[12].value}/>
          <Tile className="col-1 row-3 tile" value={this.state.tiles[13].value}/>
          <Tile className="col-2 row-3 tile" value={this.state.tiles[14].value}/>
          <Tile className="col-3 row-3 tile" value={this.state.tiles[15].value}/>
        </div>
      </div>
    );
  }
}

export default App;
