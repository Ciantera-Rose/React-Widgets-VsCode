import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class NavigationComponent extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <div>
          <NavLink exact to="/" activeClassName="nav-link-active">
            Home
          </NavLink>
          <NavLink to="/change-title" activeClassName="nav-link-active">
            Change Title
          </NavLink>
          <NavLink to="/filter-array" activeClassName="nav-link-active">
            Filter Array
          </NavLink>
          <NavLink to="/window-size" activeClassName="nav-link-active">
            Window Size
          </NavLink>
        </div>
      </div>
    );
  }
}
