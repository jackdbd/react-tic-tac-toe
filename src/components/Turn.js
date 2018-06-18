import React from "react";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";
import { fadeInDown } from "react-animations";

const animation = keyframes`${fadeInDown}`;

const AnimatedDiv = styled.div`
  animation: 1s ${animation};
`;

const Turn = props => {
  const { i, player, jumpToTurn, color } = props;
  const className = `waves-effect btn ${color}`;
  const desc = i ? `${player}: Restart from ${i}°` : `${player}: Start again`;
  return (
    <li key={i}>
      <AnimatedDiv>
        <button
          className={className}
          style={{ textAlign: "left", width: "100%", marginBottom: "0.3em" }}
          onClick={() => jumpToTurn(i)}
        >
          {desc}
        </button>
      </AnimatedDiv>
    </li>
  );
};

Turn.propTypes = {
  i: PropTypes.number.isRequired,
  player: PropTypes.string.isRequired,
  jumpToTurn: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired
};

export default Turn;
