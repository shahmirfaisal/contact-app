import React, { Component } from "react";
import Contact from "./Container/Contact/Contact";
import { Route } from "react-router-dom";

class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <Contact />
      </div>
    );
  }
}

export default App;
