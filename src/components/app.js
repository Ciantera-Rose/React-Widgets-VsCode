import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavigationContainer from "./navigation/navigation-container";
import Home from "./pages/home";
import CompChangeTitle from "./pages/compChangeTitle";
import CompFilterArray from "./pages/compFilterArray";
import CompWindowSize from "./pages/compWindowSize";

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Router>
          <div>
            <h1>React Widgets Project</h1>
            <NavigationContainer />

            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/change-title" component={CompChangeTitle} />
              <Route path="/filter-array" component={CompFilterArray} />
              <Route path="/window-size" component={CompWindowSize} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
