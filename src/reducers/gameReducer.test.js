import { START_AGAIN, MAKE_MOVE, JUMP_TO_TURN } from "../actions";
import { initialState, gameReducer } from "./gameReducer";
import { X, O } from "../symbols";

describe("reducers", () => {
  it("Should reset to the initial state", () => {
    const state = {
      player: X,
      cells: Array(9).fill(X)
    };
    const action = { type: START_AGAIN };
    const nextState = gameReducer(state, action);
    expect(nextState).toEqual(initialState);
  });
});
