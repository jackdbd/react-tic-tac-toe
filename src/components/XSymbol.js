import React from "react";

const XSymbol = props => {
  const { stroke } = props;
  return (
    <svg viewBox="0 0 64 64">
      <line x1="4" y1="4" x2="60" y2="60" stroke={stroke} strokeWidth="2" />
      <line x1="4" y1="60" x2="60" y2="4" stroke={stroke} strokeWidth="2" />
    </svg>
  );
};

export default XSymbol;
