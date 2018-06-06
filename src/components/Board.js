/**
 * Board module.
 * @module /components/Board
 */
import React from "react";
import BoardRow from "./BoardRow";

const Board = props => {
  const { status, cells, onClick } = props;
  return (
    <div className="row" style={{ backgroundColor: "orange" }}>
      <div className="col s12" style={{ backgroundColor: "red" }}>
        <h3>{status}</h3>
        <BoardRow indexStart={0} cells={cells} onClick={onClick} />
        <BoardRow indexStart={3} cells={cells} onClick={onClick} />
        <BoardRow indexStart={6} cells={cells} onClick={onClick} />
      </div>
    </div>
  );
};

export default Board;
