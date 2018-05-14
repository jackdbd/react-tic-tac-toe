/**
 * BoardRow module.
 * @module /components/BoardRow
 */
import React from "react";
import * as d3 from "d3";
import BoardCell from "./BoardCell";
import styled from "styled-components";

const Div = styled.div`
  &:after {
    clear: both;
    content: "";
    display: table;
  }
`;

const BoardRow = props => {
  const { indexStart, cells, onClick } = props;
  const BoardCellList = d3.range(3).map(index => {
    const i = indexStart + index;
    return (
      <BoardCell key={index} value={cells[i]} onClick={() => onClick(i)} />
    );
  });
  return <Div>{BoardCellList}</Div>;
};

export default BoardRow;
