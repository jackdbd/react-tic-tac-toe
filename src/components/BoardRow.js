import React, { Component } from "react";
import Square from "./Square";
import styled from "styled-components";

const Div = styled.div`
  &:after {
    clear: both;
    content: "";
    display: table;
  }
`;

class BoardRow extends Component {
  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    const i = this.props.indexStart;
    return (
      <Div>
        {this.renderSquare(i + 0)}
        {this.renderSquare(i + 1)}
        {this.renderSquare(i + 2)}
      </Div>
    );
  }
}

export default BoardRow;
