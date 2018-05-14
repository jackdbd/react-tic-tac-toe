/**
 * Info module.
 * @module /components/Info
 */
import React from "react";
import styled from "styled-components";

const Div = styled.div`
  background-color: #68838b;
  margin-left: 20px;
`;

const DivStatus = styled.div`
  font: 24px "Lobster";
  background-color: steelblue;
  margin-bottom: 20px;
`;

const Ul = styled.ul`
  padding-left: 1em;
  padding-right: 1em;
  list-style-type: none;
`;

const Info = props => {
  const { status, moves } = props;
  return (
    <Div>
      <DivStatus>{status}</DivStatus>
      <Ul>{moves}</Ul>
    </Div>
  );
};

export default Info;
