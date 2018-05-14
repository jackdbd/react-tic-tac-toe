import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import styled from "styled-components";
import Board from "../components/Board";
import Info from "../components/Info";
import { calculateWinner } from "../utils";
import { makeMove, jumpToTurn } from "../actions";

const Div = styled.div`
  display: flex;
  flex-direction: row;
`;

class Game extends Component {
  handleClick(iCell) {
    const { cells, player } = this.props;
    const winner = calculateWinner(cells);
    // maybe it's better to pass winner to makeMove and dispatch it to the reducers?
    if (winner) return;
    this.props.makeMove(player, iCell);
  }

  renderTurnItem(d, i) {
    const desc = i
      ? `Restart from turn ${i} (${d.player})`
      : `Start again (${d.player})`;
    return (
      <li key={i}>
        <button onClick={() => this.props.jumpToTurn(i)}>{desc}</button>
      </li>
    );
  }

  render() {
    const { history, cells, player } = this.props;
    const items = history.map((d, i) => {
      return this.renderTurnItem(d, i);
    });
    const winner = calculateWinner(cells);
    const status = winner ? `Player ${player} loses!` : `Player ${player} turn`;

    return (
      <Div>
        <Board cells={cells} onClick={i => this.handleClick(i)} />
        <Info status={status} moves={items} />
      </Div>
    );
  }
}

function mapStateToProps(state) {
  const props = state.gameStore;
  return props;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ makeMove, jumpToTurn }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);
