import React, { Component } from "react";

class Test extends Component {
  state = {};
  render() {
    return (
      <div>
        <form>
          <input type="username" name="username" id="new-user-username" />
          <input type="password" name="password" id="new-user-password" />
          <input type="submit" name="submit" id="new-user-submit" />
        </form>
        <form>
          <input type="title" name="title" id="new-post-title" />
          <input type="content" name="content" id="new-post-content" />
          <input type="submit" name="submit" id="new-post-submit" />
        </form>
      </div>
    );
  }
}

export default Test;
