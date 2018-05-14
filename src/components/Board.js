/**
 * Board module.
 * @module /components/Board
 */
import React, { Component } from "react";
import BoardRow from "./BoardRow";

class Board extends Component {
  render() {
    return (
      <div>
        <BoardRow
          indexStart={0}
          squares={this.props.squares}
          onClick={this.props.onClick}
        />
        <BoardRow
          indexStart={3}
          squares={this.props.squares}
          onClick={this.props.onClick}
        />
        <BoardRow
          indexStart={6}
          squares={this.props.squares}
          onClick={this.props.onClick}
        />
      </div>
    );
  }
}

export default Board;
