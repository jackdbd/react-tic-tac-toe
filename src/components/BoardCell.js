/**
 * BoardCell module.
 * Even if this is a functional component, React stil needs to be available in
 * scope when using JSX, so we need to import it.
 * @module /components/BoardCell
 */
import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background-color: #fff;
  border: ${props => props.border};
  float: left;
  font-size: 24px;
  font-weight: bold;
  line-height: 34px;
  height: 34px;
  margin-right: -1px;
  margin-top: -1px;
  padding: 0;
  text-align: center;
  width: 34px;
  border-radius: 15px;

  &:focus {
    border-color: #6772e5;
    outline: none;
    box-shadow: 0 1px 6px rgba(103, 114, 229, 0.5);
  }
`;

const BoardCell = props => {
  const { value, onClick } = props;
  return (
    <Button onClick={onClick} border={"1px dashed #d3d3d3"}>
      {value}
    </Button>
  );
};

export default BoardCell;
