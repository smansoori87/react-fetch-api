import React, { Component } from "react";

class GitRepos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: []
    };

    this.getGitData = this.getGitData.bind(this);
  }

  getGitData() {
    const gitUrl = "https://api.github.com/user";
    fetch(gitUrl)
      .then(response => response.json())
      //.then(response => console.log(response))
      .then(response =>
        this.setState({
          result: response
        })
      );
  }

  render() {
    return (
      <div>
        <h1>Git Data</h1>
        <input type="button" value="Get Data" onClick={this.getGitData} />
        <p>{this.state.result.message}</p>
      </div>
    );
  }
}

export default GitRepos;
