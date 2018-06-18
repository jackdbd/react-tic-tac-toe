/**
 * Board module.
 * @module /components/Board
 */
import React from "react";
import { range as d3Range } from "d3-array";
import styled from "styled-components";
import BoardCell from "./BoardCell";

const Grid = styled.div`
  display: grid;
  grid-template-columns: ${props => `repeat(${props.numColumns}, 1fr);`};
  grid-template-rows: ${props => `repeat(${props.numRows}, 1fr);`};
  border: ${props => props.border};
  grid-gap: 1px;
`;

const renderGrid = (
  cells,
  numRows,
  numColumns,
  onClick,
  primaryColor,
  secondaryColor
) => {
  return d3Range(numRows).map(iRow => {
    return d3Range(numColumns).map(iCol => {
      const iCell = iRow * numColumns + iCol;
      const value = cells[iCell];
      return (
        <BoardCell
          key={iCell}
          value={value}
          onClick={() => onClick(iCell)}
          primaryColor={primaryColor}
          secondaryColor={secondaryColor}
        />
      );
    });
  });
};

const Board = props => {
  const {
    status,
    cells,
    numRows,
    numColumns,
    onClick,
    primaryColor,
    secondaryColor
  } = props;
  return (
    <div className="row">
      <div className="col s12">
        <h5 className="center-align">{status}</h5>
        <Grid numColumns={numColumns} numRows={numRows}>
          {renderGrid(
            cells,
            numRows,
            numColumns,
            onClick,
            primaryColor,
            secondaryColor
          )}
        </Grid>
      </div>
    </div>
  );
};

export default Board;
