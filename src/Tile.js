import React, { Component } from 'react';
import './App.css';

class Tile extends Component {
    render() {
        return (
        <div className={this.props.className}>
            {this.props.value}
        </div>
        );
    }
}

export default Tile;
