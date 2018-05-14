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
  font: 24px "Times new Roman";
  background-color: steelblue;
  margin-bottom: 20px;
`;

const Ol = styled.ol`
  padding-left: 30px;
  padding-right: 10px;
`;

const Info = props => {
  const { status, moves } = props;
  return (
    <Div>
      <DivStatus>{status}</DivStatus>
      <Ol>{moves}</Ol>
    </Div>
  );
};

export default Info;
