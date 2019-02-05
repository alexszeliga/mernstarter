import React, { Component } from "react";
import Test from "./test/test";

class App extends Component {
  state = {
    loggedIn: false,
    username: ""
  };
  render() {
    return <Test />;
  }
}

export default App;
