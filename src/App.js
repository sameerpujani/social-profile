import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Users from "./Components/Users";
import Profile from "./Components/Profile";
import Posts from "./Components/Profile/Posts";
import Gallery from "./Components/Profile/Gallery";
import Album from "./Components/Profile/Album";
import Todo from "./Components/Profile/Todo";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/user/:id/profile" component={Profile} />
          <Route path="/user/:id/posts" component={Posts} />
          <Route exact path="/user/:id/gallery" component={Gallery} />
          <Route path="/user/:id/gallery/:album_id" component={Album} />
          <Route path="/user/:id/todo" component={Todo} />

          {/* Default route when nothing else matches */}
          <Route component={Users} />
        </Switch>
      </Router>
    );
  }
}
