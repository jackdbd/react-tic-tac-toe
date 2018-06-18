import React from "react";
import "./Turn.css";

const Turn = props => {
  const { i, player, jumpToTurn, color } = props;
  const className = `waves-effect btn ${color}`;
  const desc = i ? `${player}: Restart from ${i}°` : `${player}: Start again`;
  return (
    <li key={i}>
      <button className={className} onClick={() => jumpToTurn(i)}>
        {desc}
      </button>
    </li>
  );
};

export default Turn;
