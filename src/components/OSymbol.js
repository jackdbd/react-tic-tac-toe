import React from "react";

const OSymbol = props => {
  const { stroke } = props;
  return (
    <svg viewBox="0 0 64 64">
      <circle
        cx={32}
        cy={32}
        r={28}
        stroke={stroke}
        strokeWidth="2"
        fill="none"
      />
    </svg>
  );
};

export default OSymbol;
