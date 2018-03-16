import React, { Component } from 'react';
import './App.css';

/*React Components*/
import Grid from "./2048/Grid";
class App extends Component {
  render() {
    return (
      <div className="App">
        App
        <Grid />
      </div>
    );
  }
}

export default App;
