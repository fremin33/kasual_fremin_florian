// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import registerServiceWorker from './registerServiceWorker';
// import 'whatwg-fetch';
// require('dotenv').config()



// const request = require('request');

// request({
//   url: 'https://api.foursquare.com/v2/venues/search',
//   method: 'GET',
//   qs: {
//     client_id: process.env.REACT_APP_CLIENT_ID,
//     client_secret: process.env.REACT_APP_CLIENT_SECRET,
//     ll: ' 44.8404400,-0.5805000',
//     categoryId: '4bf58dd8d48988d116941735',
//     v: '20180323',
//   }
// }, function(err, res, body) {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log(body);
//   }
// });




// // var init = { 
// //   headers: {
// //     'Accept': 'application/json',
// //     'Content-Type': 'application/json',
// //     'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`,
// //   },
// //   method: 'GET',
// //   mode: 'no-cors',
// //   cache: 'no-cache' 
// // };


// // fetch('https://api.yelp.com/v3/businesses/WavvLdfdP6g8aZTtbBQHTw',init)
// // .then(function(response) {
// //   console.log(response);
// // })
// // .then(function(response) {
// //   console.log(response);
// // });



// // Render App component in Div with root id
// ReactDOM.render(
//     <Router>
//       <App />
//     </Router>, document.getElementById('root'));


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />,document.getElementById('root'));
  registerServiceWorker();
