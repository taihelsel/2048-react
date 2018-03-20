import React, { Component } from 'react';
import './App.css';

class Tile extends Component {
    render() {
        return (
        this.props.value > 0?
        <div className={this.props.className}>
            {this.props.value}
        </div>:
        <div className={this.props.className}>
        </div>
        );
    }
}

export default Tile;
