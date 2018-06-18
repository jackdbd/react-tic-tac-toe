import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Board from "../components/Board";
import Info from "../components/Info";
import { calculateWinner } from "../utils";
import { makeMove, jumpToTurn } from "../actions";

class Game extends Component {
  handleClick(iCell) {
    const { cells, player, makeMove } = this.props;
    const winner = calculateWinner(cells);
    // maybe it's better to pass winner to makeMove and dispatch it to the reducers?
    if (winner) return;
    makeMove(player, iCell);
  }

  render() {
    const {
      history,
      cells,
      numRows,
      numColumns,
      player,
      jumpToTurn,
      primaryColor,
      secondaryColor
    } = this.props;
    const winner = calculateWinner(cells);
    const status = winner ? `Player ${player} loses!` : `It's up to ${player}!`;

    return (
      <div className="row">
        <div className="col s12 m6 l3 offset-l3">
          <Board
            status={status}
            cells={cells}
            numRows={numRows}
            numColumns={numColumns}
            onClick={i => this.handleClick(i)}
            primaryColor={primaryColor}
            secondaryColor={secondaryColor}
          />
        </div>
        <div className="col s12 m6 l3">
          <Info
            history={history}
            jumpToTurn={jumpToTurn}
            secondaryColor={secondaryColor}
          />
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

const GameWithRedux = connect(mapStateToProps, mapDispatchToProps)(Game);

/*
  We export also the undecorated, redux-unaware component to test it without
  the redux store.
  https://redux.js.org/recipes/writing-tests
*/
export { Game, GameWithRedux };
