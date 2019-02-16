import React, { Component } from "react";
import Test from "./test/test";
import Axios from "axios";

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

  handleCreateUser = () => {
    Axios.post("/api/new-user", { username: "alex" }).then(response => {
      console.log(response);
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
