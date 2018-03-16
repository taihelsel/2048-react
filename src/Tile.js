import React, { Component } from 'react';
import './App.css';

class Tile extends Component {
    constructor(props){
        super(props);
        this.state = {
            value:"",
        }
    }
    render() {
        return (
        <div className={this.props.className}>
            {this.state.value}
        </div>
        );
    }
}

export default Tile;
