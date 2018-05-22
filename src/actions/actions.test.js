import {
  START_AGAIN,
  MAKE_MOVE,
  JUMP_TO_TURN,
  startAgain,
  makeMove,
  jumpToTurn
} from "./index";
import { X, O } from "../symbols";

describe("actions", () => {
  it("should create an action to add a new turn", () => {
    const payload = {
      player: X,
      iCell: 1
    };
    const expectedAction = {
      type: MAKE_MOVE,
      payload
    };
    expect(makeMove(payload.player, payload.iCell)).toEqual(expectedAction);
  });
});
