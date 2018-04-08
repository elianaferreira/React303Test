import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import ErrorBoundary from './ErrorBoundary';
import ListPager from './ListPager';
import Post from './Post';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <React.Fragment>
            <Route
              exact
              path="/"
              render={() =>
                (<ErrorBoundary>
                  <ListPager />
                </ErrorBoundary>)}
            />
            <Route
              path="/:postId"
              component={Post}
            />
          </React.Fragment>
        </div >
      </Router>
    );
  }
}

export default App;
