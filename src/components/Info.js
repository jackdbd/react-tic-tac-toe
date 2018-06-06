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
    return <Turn i={i} player={d.player} jumpToTurn={jumpToTurn} />;
  });
  return turns;
};

const Info = props => {
  const { history, jumpToTurn } = props;
  return (
    <div className="row">
      <div className="col s12">
        <Ul className="col s12">{renderTurns(history, jumpToTurn)}</Ul>
      </div>
    </div>
  );
};

export default Info;
