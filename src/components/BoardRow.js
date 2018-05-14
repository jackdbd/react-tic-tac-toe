import React from "react";
import Square from "./Square";
import styled from "styled-components";

const Div = styled.div`
  &:after {
    clear: both;
    content: "";
    display: table;
  }
`;

const BoardRow = props => {
  const { indexStart, squares, onClick } = props;
  const squareList = [0, 1, 2].map(index => {
    const i = indexStart + index;
    return <Square key={index} value={squares[i]} onClick={() => onClick(i)} />;
  });
  return <Div>{squareList}</Div>;
};

export default BoardRow;
