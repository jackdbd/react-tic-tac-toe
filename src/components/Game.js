import React, { Component } from "react";
import styled from "styled-components";
import Board from "./Board";
import Info from "./Info";
import { calculateWinner } from "../utils";

const Div = styled.div`
  display: flex;
  flex-direction: row;
`;

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          cells: Array(9).fill(null)
        }
      ],
      stepNumber: 0,
      xIsNext: true
    };
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const cells = current.cells.slice();
    if (calculateWinner(cells) || cells[i]) {
      return;
    }
    cells[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
      history: history.concat([
        {
          cells: cells
        }
      ]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.cells);

    const moves = history.map((step, move) => {
      const desc = move ? "Go to move #" + move : "Go to game start";
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    }

    return (
      <Div>
        <Board cells={current.cells} onClick={i => this.handleClick(i)} />
        <Info status={status} moves={moves} />
      </Div>
    );
  }
}

export default Game;
