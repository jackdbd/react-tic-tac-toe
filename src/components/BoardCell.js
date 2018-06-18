/**
 * BoardCell module.
 * Even if this is a functional component, React stil needs to be available in
 * scope when using JSX, so we need to import it.
 * @module /components/BoardCell
 */
import React from "react";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations";
import BlankSymbol from "./BlankSymbol";
import OSymbol from "./OSymbol";
import XSymbol from "./XSymbol";

const animation = keyframes`${fadeIn}`;

const AnimatedDiv = styled.div`
  animation: 1.5s ${animation};
`;

const Button = styled.button`
  background-color: ${props => props.primaryColor};
  text-align: center;
  width: 100%;
  border-radius: 10px;

  &:focus {
    background-color: ${props => props.primaryColor};
    border-color: ${props => props.secondaryColor};
    outline: none;
  }
`;

const BoardCell = props => {
  const { value, onClick, primaryColor, secondaryColor } = props;
  let Symbol;
  if (value === "X") {
    Symbol = XSymbol;
  } else if (value === "O") {
    Symbol = OSymbol;
  } else {
    Symbol = BlankSymbol;
  }
  return (
    <AnimatedDiv>
      <Button
        onClick={onClick}
        primaryColor={primaryColor}
        secondaryColor={secondaryColor}
      >
        <Symbol stroke={"#000"} />
      </Button>
    </AnimatedDiv>
  );
};

BoardCell.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  primaryColor: PropTypes.string.isRequired,
  secondaryColor: PropTypes.string.isRequired
};

export default BoardCell;
