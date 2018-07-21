import React, { Component } from "react";
import { Link } from "react-router-dom";
import 'whatwg-fetch';
require('dotenv').config()


class Details extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      nb: 0
    }
  }

  componentDidMount() {
    var url = new URL(`https://api.foursquare.com/v2/venues/${this.props.match.params.id}`),
    params = {
        client_id: process.env.REACT_APP_CLIENT_ID,
        client_secret: process.env.REACT_APP_CLIENT_SECRET,
        v: '20180323'
      }

    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
    fetch(url).then((results) => {
      return results.json();
    }).then((data) => {
      console.log(data);
      this.setState({
        name: data.response.venue.name
      })
    });
  }




  render() {
    console.log("props=",this.props.match.params.id);

    return (
      <React.Fragment>
        <div>
          <h1>Details</h1>
          <h2>{this.state.name}</h2>
        </div>
      </React.Fragment>
    );
  }
}
export default Details;