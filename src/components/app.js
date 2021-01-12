import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavigationContainer from "./navigation/navigation-container";
import Home from "./pages/home";
import CompChangeTitle from "./pages/compChangeTitle";

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
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
