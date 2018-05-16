import React, { Component } from "react";

class TestData extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <div>
        <h1>test Data</h1>
        <p>{this.props.testProp.name}</p>
        <p>{this.props.testProp.testData[0].testd.age}</p>
      </div>
    );
  }
}

export default TestData;
