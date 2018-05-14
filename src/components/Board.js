/**
 * Board module.
 * @module /components/Board
 */
import React from "react";
import BoardRow from "./BoardRow";

const Board = props => {
  return (
    <div>
      <BoardRow indexStart={0} cells={props.cells} onClick={props.onClick} />
      <BoardRow indexStart={3} cells={props.cells} onClick={props.onClick} />
      <BoardRow indexStart={6} cells={props.cells} onClick={props.onClick} />
    </div>
  );
};

export default Board;
