import React, { Component } from "react";

import TestData from "./testdata";

class GitRepos extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      result: []
    };

    this.getGitData = this.getGitData.bind(this);
  }

  getGitData() {
    const gitUrl = "https://api.github.com/user";
    fetch(gitUrl)
      .then(function(response) {
        return response.json();
      })
      .then(response => {
        this.setState({
          result: response
        });
        return response;
      })
      .then(response => {
        console.log(response);
        return response;
      });
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <h1>Git Data</h1>
        <input type="button" value="Get Data" onClick={this.getGitData} />
        <p>{this.state.result.message}</p>
        <p>{this.props.testData.name}</p>
        <TestData testProp={this.props} />
      </div>
    );
  }
}

export default GitRepos;
