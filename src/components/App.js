import React, { Component } from "react";
import Title from "./Title";
import Game from "./Game";

class App extends Component {
  render() {
    return (
      <div>
        <Title>React Tic Tac Toe</Title>
        <Game />
      </div>
    );
  }
}

export default App;
