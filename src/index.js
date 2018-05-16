import React, { Component } from "react";
import { render } from "react-dom";
import Hello from "./Hello";

import GitRepos from "./gitrepos";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const hrfStyle = {
  borderRadius: "10px"
};

class App extends Component {
  render() {
    return (
      <div>
        <h1 style={hrfStyle}>Fetch API</h1>
        <GitRepos />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
