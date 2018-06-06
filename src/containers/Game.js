import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Board from "../components/Board";
import Info from "../components/Info";
import { calculateWinner } from "../utils";
import { makeMove, jumpToTurn } from "../actions";

/*
  We export the undecorated, redux-unaware component to test it without the
  redux store.
  https://redux.js.org/recipes/writing-tests
*/
export class Game extends Component {
  handleClick(iCell) {
    const { cells, player, makeMove } = this.props;
    const winner = calculateWinner(cells);
    // maybe it's better to pass winner to makeMove and dispatch it to the reducers?
    if (winner) return;
    makeMove(player, iCell);
  }

  render() {
    const { history, cells, player, jumpToTurn } = this.props;
    const winner = calculateWinner(cells);
    const status = winner ? `Player ${player} loses!` : `It's up to ${player}!`;

    return (
      <div className="row">
        <div className="col s12 m8">
          <Board
            status={status}
            cells={cells}
            onClick={i => this.handleClick(i)}
          />
        </div>
        <div className="col s12 m4">
          <Info history={history} jumpToTurn={jumpToTurn} />
        </div>
      </div>
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
