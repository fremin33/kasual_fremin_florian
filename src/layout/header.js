import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Header extends Component {
active = {
    fontWeight: "bold",
    color: "red"
    };
    header = {
    display: "flex",
    justifyContent: "space-evenly",
    listStyle: "none"
};
    render() {
        return (
            <div style={this.header}>
                <NavLink exact to="/" activeStyle={this.active}>
                Lists
                    </NavLink>
                    <NavLink to="/map" activeStyle={this.active}>
                Maps
                </NavLink>
            </div>
        );
    }
}

export default Header;