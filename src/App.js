import React, { Component } from "react";
import {BrowserRouter as Router}  from 'react-router-dom';
import ReactRouter from './router/router';
import './App.css';

class App extends Component {
    render() {
        return (
            <Router>
            <ReactRouter/>
            </Router>
        );
    }
}
export default App;

