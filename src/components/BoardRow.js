/**
 * BoardRow module.
 * @module /components/BoardRow
 */
import React from "react";
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
  const BoardCellList = [0, 1, 2].map(index => {
    const i = indexStart + index;
    return (
      <BoardCell key={index} value={cells[i]} onClick={() => onClick(i)} />
    );
  });
  return <Div>{BoardCellList}</Div>;
};

export default BoardRow;
