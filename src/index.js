import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import registerServiceWorker from './registerServiceWorker';
import 'whatwg-fetch';

require('dotenv').config()


var requestHeaders = new Headers({
  "Authorization": "Bearer " + process.env.REACT_APP_API_KEY,
});

var init = { 
  method: 'GET',
  headers: requestHeaders,
  mode: 'no-cors',
  cache: 'no-cache' 
};


fetch('https://api.yelp.com/v3/businesses/WavvLdfdP6g8aZTtbBQHTw',init)
.then(function(response) {
  console.log(response);
})
.then(function(response) {
  console.log(response);
});



// Render App component in Div with root id
ReactDOM.render(
    <Router>
      <App />
    </Router>, document.getElementById('root'));
  registerServiceWorker();


