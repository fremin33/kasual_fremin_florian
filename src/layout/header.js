import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Header extends Component {
    active = {
        fontWeight: "bold",
        color: "white"
    };
    header = {
        display: "flex",
        justifyContent: "space-evenly",
        listStyle: "none",
        marginBottom: "15px"
    };

    // Render Header of website
    render() {
        return (
            <div className="col-xs-12">
                <header>
                    <h1 className="text-center">SEARCH ENGINE OF
              <span>BORDEAUX BARS</span></h1>
                </header>
                <div style={this.header}>
                    <NavLink exact to="/" activeStyle={this.active}>
                        <button className="btn btn-warning">Lists</button>
                    </NavLink>
                    <NavLink to="/map" activeStyle={this.active}>
                        <button className="btn btn-warning">Map</button>
                    </NavLink>
                </div>
            </div>
        );
    }
}

export default Header;