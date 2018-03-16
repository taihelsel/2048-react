import React, { Component } from 'react';
import '.././App.css';

/*React Components*/
import Tile from "./Tile";

class Grid extends Component {
  render() {
    return (
      <div className="Grid">
        Grid
        <Tile />
      </div>
    );
  }
}

export default Grid;
