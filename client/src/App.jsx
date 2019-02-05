import React, { Component } from "react";
import Test from "./test/test";

class App extends Component {
  state = {
    loggedIn: false,
    newUserUsername: "",
    newUserPassword: "",
    logInUsername: "",
    logInPassword: "",
    newPostTitle: "",
    newPostBody: ""
  };

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <Test
        handleInputChange={this.handleInputChange}
        newUserUsername={this.state.newUserUsername}
        newUserPassword={this.state.newUserPassword}
        logInUsername={this.state.logInUsername}
        logInPassword={this.state.logInPassword}
        newPostTitle={this.state.newPostTitle}
        ewPostTitle={this.state.ewPostTitle}
      />
    );
  }
}

export default App;
