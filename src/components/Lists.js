import React, { Component } from "react";
import { Link } from "react-router-dom";
import 'whatwg-fetch';
require('dotenv').config()


class Lists extends Component {
  constructor() {
    super();
    this.state = {
      bars: [],
      filteredList: [],
      updateList: []
    }
  }
  componentDidMount() {
    var url = new URL("https://api.foursquare.com/v2/venues/search"),
      params = {
        client_id: process.env.REACT_APP_CLIENT_ID,
        client_secret: process.env.REACT_APP_CLIENT_SECRET,
        ll: '44.8404400,-0.5805000',
        categoryId: '4bf58dd8d48988d116941735',
        v: '20180323'
      }

    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
    fetch(url).then((results) => {
      return results.json();
    }).then((data) => {
      let filteredList = data.response.venues.map((bar) => {
        return bar
      });
      let bars = data.response.venues.map((bar) => {
        return (
          <div key={bar.id}>
            <div className="list-group mb">
              <Link to={{ pathname: `details/${bar.id}` }}>
                <button type="button" className="list-group-item">
                  {bar.name}
                </button>
              </Link>
            </div>
          </div>
        )
      })
      this.setState({ bars: bars, filteredList: filteredList });
    })
  }


  handleSearch(event) {
    var updatedList = this.state.filteredList.filter(function (item) {
      return item.name.toLowerCase().search(
        event.target.value.toLowerCase()) !== -1;
    });
    let bars = updatedList.map((bar) => {
      return (
        <div key={bar.id}>
          <div className="list-group mb">
            <Link to={{ pathname: `details/${bar.id}` }}>
              <button type="button" className="list-group-item">
                {bar.name}
              </button>
            </Link>
          </div>
        </div>
      )
    })
    this.setState({ bars: bars });
  }


  render() {
    return (
      <div className="col-xs-12 text-center">
        {/* <Filter /> */}
        <input type="text" className="form-control form-control-lg" placeholder="Search" onKeyUp={this.handleSearch.bind(this)} />
        <React.Fragment>
          {this.state.bars}
        </React.Fragment>
      </div>
    );
  }
}
export default Lists;

