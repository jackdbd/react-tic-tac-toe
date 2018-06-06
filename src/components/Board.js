/**
 * Board module.
 * @module /components/Board
 */
import React from "react";
import { range as d3Range } from "d3-array";
import BoardCell from "./BoardCell";

const renderGrid = (cells, numRows, numColumns, onClick) => {
  return d3Range(numRows).map(iRow => {
    return d3Range(numColumns).map(iCol => {
      const iCell = iRow * numColumns + iCol;
      const value = cells[iCell];
      return (
        <BoardCell key={iCell} value={value} onClick={() => onClick(iCell)} />
      );
    });
  });
};

const Board = props => {
  const { status, cells, numRows, numColumns, onClick } = props;
  return (
    <div className="row" style={{ backgroundColor: "green" }}>
      <div className="col s12">
        <h5 className="center-align">{status}</h5>
        {renderGrid(cells, numRows, numColumns, onClick)}
      </div>
    </div>
  );
};

export default Board;
