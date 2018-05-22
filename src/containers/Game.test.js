import React from "react";
import ReactDOM from "react-dom";
import { Game } from "./Game";
import { initialState } from "../reducers/gameReducer";

describe("Game component", () => {
  /*
    Since there is no redux store in this test, we don't have mapStateToProps,
    so we need to pass the props manually.
  */
  const { history, cells, player } = initialState;
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <Game history={history} cells={cells} player={player} />,
      div
    );
  });
});
