// action types

export const START_AGAIN = "START_AGAIN";
export const MAKE_MOVE = "MAKE_MOVE";
export const JUMP_TO_TURN = "JUMP_TO_TURN";

// action creators

export function startAgain() {
  return { type: START_AGAIN };
}

export function makeMove(player, iCell) {
  return {
    type: MAKE_MOVE,
    payload: {
      player,
      iCell
    }
  };
}

export function jumpToTurn(iTurn) {
  return {
    type: JUMP_TO_TURN,
    payload: {
      iTurn
    }
  };
}
