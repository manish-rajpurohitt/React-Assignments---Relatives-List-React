import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor() {
    super();
    this.relativeList = ["relative1", "relative2", "relative3"];
  }
  render() {
    return (
      <div id="main">
        <ol key="relativeList">
          {this.relativeList.map((e, index) => {
            return <li key={"relativeListItem" + (index + 1).toString()}>e</li>;
          })}
        </ol>
      </div>
    );
  }
}

export default App;
