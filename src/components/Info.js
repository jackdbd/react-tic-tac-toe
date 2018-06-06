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

const renderTurns = (history, jumpToTurn) => {
  const turns = history.map((d, i) => {
    return <Turn key={i} i={i} player={d.player} jumpToTurn={jumpToTurn} />;
  });
  return turns;
};

const Info = props => {
  const history = props.history || [];
  const jumpToTurn = props.jumpToTurn;
  return (
    <div className="row">
      <div className="col s12">
        <Ul>{renderTurns(history, jumpToTurn)}</Ul>
      </div>
    </div>
  );
};

export default Info;
