import React, { Component } from 'react';
import './App.css';

class Tile extends Component {
    constructor(props){
        super(props);
        this.state = {
            value:"Tile props",
        }
    }
    render() {
        return (
        <div className="Tile">
            {this.state.value}
        </div>
        );
    }
}

export default Tile;
