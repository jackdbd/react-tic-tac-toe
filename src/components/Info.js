/**
 * Info module.
 * @module /components/Info
 */
import React from "react";
import styled from "styled-components";
import Turn from "./Turn";

const Ul = styled.ul`
  padding-left: 1em;
  list-style-type: none;
`;

const renderTurns = (history, jumpToTurn, color) => {
  const turns = history.map((d, i) => {
    return (
      <Turn
        key={i}
        i={i}
        player={d.player}
        jumpToTurn={jumpToTurn}
        color={color}
      />
    );
  });
  return turns;
};

const Info = props => {
  const history = props.history || [];
  const jumpToTurn = props.jumpToTurn;
  const color = props.secondaryColor;
  return (
    <div className="row">
      <div className="col s12">
        <Ul>{renderTurns(history, jumpToTurn, color)}</Ul>
      </div>
    </div>
  );
};

export default Info;
