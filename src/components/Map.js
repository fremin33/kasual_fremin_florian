import React, { Component } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import { Link } from "react-router-dom";


class Map extends Component {

  constructor() {
    super();
    this.state = {
      bars: [],
      viewport: {
        width: 900,
        height: 500,
        latitude: 44.8404400,
        longitude: -0.5805000,
        zoom: 13,
        margin: 0
      },
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
      let bars = data.response.venues.map((bar) => {
        return (
          <Link to={{ pathname: `details/${bar.id}` }} key={bar.id}>
            <Marker latitude={bar.location.labeledLatLngs[0].lat} longitude={bar.location.labeledLatLngs[0].lng}>
            </Marker>
            <Popup latitude={bar.location.labeledLatLngs[0].lat} longitude={bar.location.labeledLatLngs[0].lng} anchor="right"> 
              <div>{bar.name}</div>
            </Popup>
          </Link>
        )
      });
      this.setState({ bars })
    })
  }

  render() {
    return (
      <ReactMapGL mapboxApiAccessToken={process.env.REACT_APP_PUBLIC_MAP_TOKEN}
        {...this.state.viewport}
        onViewportChange={(viewport) => this.setState({ viewport })}
      >
        {this.state.bars}
      </ReactMapGL>
    );
  }
}

export default Map;
