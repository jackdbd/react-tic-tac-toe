/**
 * Square module.
 * Even if Square is a functional component, React stil needs to be available in
 * scope when using JSX, so we need to import it.
 * @module /components/Square
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

  &:focus {
    border-color: #6772e5;
    outline: none;
    box-shadow: 0 1px 6px rgba(103, 114, 229, 0.5);
  }
`;

const Square = props => {
  return (
    <Button onClick={props.onClick} border={"1px dashed #d3d3d3"}>
      {props.value}
    </Button>
  );
};

export default Square;
