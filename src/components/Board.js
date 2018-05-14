/**
 * Board module.
 * @module /components/Board
 */
import React from "react";
import BoardRow from "./BoardRow";

const Board = props => {
  return (
    <div>
      <BoardRow
        indexStart={0}
        squares={props.squares}
        onClick={props.onClick}
      />
      <BoardRow
        indexStart={3}
        squares={props.squares}
        onClick={props.onClick}
      />
      <BoardRow
        indexStart={6}
        squares={props.squares}
        onClick={props.onClick}
      />
    </div>
  );
};

export default Board;
