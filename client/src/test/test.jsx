import React, { Component } from "react";
class Test extends Component {
  state = {};

  render() {
    const {
      newUserUsername,
      newUserPassword,
      logInUsername,
      logInPassword,
      newPostTitle,
      newPostBody,
      handleInputChange
    } = this.props;

    return (
      <div>
        <form>
          <input
            onChange={handleInputChange}
            type="username"
            name="newUserUsername"
            id="new-user-username"
            value={newUserUsername}
          />
          <input
            onChange={handleInputChange}
            type="password"
            name="newUserPassword"
            id="new-user-password"
            value={newUserPassword}
          />
          <input type="submit" name="submit" id="new-user-submit" />
        </form>
        <form>
          <input
            onChange={handleInputChange}
            type="username"
            name="logInUsername"
            id="log-in-username"
            value={logInUsername}
          />
          <input
            onChange={handleInputChange}
            type="password"
            name="logInPassword"
            id="log-in-password"
            value={logInPassword}
          />
          <input type="submit" name="submit" id="log-in-submit" />
        </form>
        <form>
          <input
            onChange={handleInputChange}
            type="title"
            name="newPostTitle"
            id="new-post-title"
            value={newPostTitle}
          />
          <input
            onChange={handleInputChange}
            type="body"
            name="newPostBody"
            id="new-post-body"
            value={newPostBody}
          />
          <input type="submit" name="submit" id="new-post-submit" />
        </form>
      </div>
    );
  }
}

export default Test;
