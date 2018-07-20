import React, { Component } from "react";
import 'whatwg-fetch';
require('dotenv').config()


const request = require('request');




class Lists extends Component {
componentDidMount() {
  request({
    url: 'https://api.foursquare.com/v2/venues/search',
    method: 'GET',
    qs: {
      client_id: process.env.REACT_APP_CLIENT_ID,
      client_secret: process.env.REACT_APP_CLIENT_SECRET,
      ll: ' 44.8404400,-0.5805000',
      categoryId: '4bf58dd8d48988d116941735',
      v: '20180323',
    }
  }, function(err, res, body) {
    if (err) {
      console.error(err);
    } else {
      console.log(body);
    }
  });
}
  
    render() {
        return (
            <React.Fragment>
<div className="index-content">
  <div className="container">
    <a href="blog-ici.html">
    </a><div className="col-lg-4"><a href="blog-ici.html">
      </a><div className="card"><a href="blog-ici.html">
          <img src="http://cevirdikce.com/proje/hasem-2/images/finance-1.jpg" />
          <h4>Investment Strategy</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </a><a href="blog-ici.html" className="blue-button">Read More</a>
      </div>
    </div>
    <a href="blog-ici.html">
    </a><div className="col-lg-4"><a href="blog-ici.html">
      </a><div className="card"><a href="blog-ici.html">
          <img src="http://cevirdikce.com/proje/hasem-2/images/finance-2.jpg" />
          <h4>Investment Strategy</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </a><a href="blog-ici.html" className="blue-button">Read More</a>
      </div>
    </div>
    <a href="blog-ici.html">
    </a><div className="col-lg-4"><a href="blog-ici.html">
      </a><div className="card"><a href="blog-ici.html">
          <img src="http://cevirdikce.com/proje/hasem-2/images/finance-3.jpg" />
          <h4>Investment Strategy</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </a><a href="blog-ici.html" className="blue-button">Read More</a>
      </div>
    </div>
  </div>
</div>

            </React.Fragment>
        );
    }
}
export default Lists;