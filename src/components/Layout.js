import React, { Component } from 'react';
import NavBar from './AppBar';

export default class Layout extends Component {
    render(){
        return (
            <div>
            <NavBar />
            {this.props.children}
            </div>
        );
    }
}
