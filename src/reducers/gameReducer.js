import { START_AGAIN, MAKE_MOVE, JUMP_TO_TURN } from "../actions";
import { X, O } from "../symbols";

export const initialState = {
  player: X,
  cells: Array(9).fill(null),
  history: []
};

export const gameReducer = (state = initialState, action) => {
  let newState, newCells, newHistory;
  switch (action.type) {
    case START_AGAIN:
      return initialState;

    case MAKE_MOVE:
      const { player, iCell } = action.payload;
      newCells = state.cells.map((d, i) => {
        return i === iCell ? player : d;
      });
      newHistory = state.history.concat({ player, cells: newCells });
      newState = {
        ...state,
        player: state.player === X ? O : X,
        cells: newCells,
        history: newHistory
      };
      return newState;

    case JUMP_TO_TURN:
      const { iTurn } = action.payload;
      if (iTurn === 0) return initialState;
      newHistory = state.history.slice(0, iTurn);

      return {
        ...state,
        player: state.history[iTurn].player,
        cells: newHistory[newHistory.length - 1].cells,
        history: newHistory
      };

    default:
      return state;
  }
};
