import React, { Component } from "react";
import CompChangeTitle from "./compChangeTitle";

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>React Widgets Project</h1>
        <hr />
        <CompChangeTitle />
      </div>
    );
  }
}
