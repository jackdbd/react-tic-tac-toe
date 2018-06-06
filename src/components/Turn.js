import React from "react";
import "./Turn.css";

const Turn = props => {
  const { i, player, jumpToTurn } = props;
  const desc = i ? `${player}: Restart from ${i}°` : `${player}: Start again`;
  return (
    <li key={i}>
      <button className="waves-effect btn" onClick={() => jumpToTurn(i)}>
        {desc}
      </button>
    </li>
  );
};

export default Turn;
