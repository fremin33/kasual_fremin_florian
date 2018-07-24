import React, { Component } from "react";
import 'whatwg-fetch';
require('dotenv').config()


class Details extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
    }
  }

  // Get data with id of venue
  componentDidMount() {
    var url = new URL(`https://api.foursquare.com/v2/venues/${this.props.match.params.id}`),
      params = {
        client_id: process.env.REACT_APP_CLIENT_ID,
        client_secret: process.env.REACT_APP_CLIENT_SECRET,
        v: '20180323'
      }

  // Update params
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
    fetch(url).then((results) => {
      return results.json();
    }).then((data) => {
      this.setState({
        name: data.response.venue.name,
        img: data.response.venue.bestPhoto.prefix + 'height320' + data.response.venue.bestPhoto.suffix,
        url: data.response.venue.canonicalUrl,
        tel: data.response.venue.contact.formattedPhone,
        adress: data.response.venue.location.address,
        city: data.response.venue.location.city,
        country: data.response.venue.location.country,
      })
    });
  }


  render() {
    return (
      <div className="col-xs-12 text-center detail">
        <React.Fragment>
          <h1>{this.state.name}</h1>
          <a href={this.state.url} target="_blank">
            <img className="imgDetail" src={this.state.img} />
            <div className="hover-home">
              <p className="link-hover-home">Découvrir <span>{this.state.name}</span></p>
              <div className="line"></div>
            </div>
          </a>
          <h2>Contact</h2>
          <ul>
            <li>{this.state.tel}</li>
            <li>{this.state.adress} {this.state.city}</li>
            <li>{this.state.country}</li>
          </ul>
        </React.Fragment>
      </div>
    );
  }
}
export default Details;