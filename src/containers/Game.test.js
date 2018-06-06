import React from "react";
import { shallow, mount, render } from "enzyme";
import { Provider } from "react-redux";
import { Game, GameWithRedux } from "./Game";
import { initialState } from "../reducers/gameReducer";
import store from "../store";
import "../setupEnzymeTests";

/*
  Since <Game /> is not hooked up to the redux store, we need to pass the
  content of initialState manually. Children components of <Game /> require 
  these properties to be available as props.
*/
describe("<Game /> (not connected to redux)", () => {
  const { history, cells, player } = initialState;

  it("should render without crashing", () => {
    const wrapper = shallow(
      <Game history={history} cells={cells} player={player} />
    );
  });

  it("should be wrapped in a .row", () => {
    const wrapper = mount(
      <Game history={history} cells={cells} player={player} />
    );
    expect(
      wrapper
        .find("div")
        .first()
        .hasClass("row")
    ).toEqual(true);
  });
});

describe("<GameWithRedux /> (connected to redux store)", () => {
  it("should render without crashing", () => {
    const wrapper = shallow(
      <Provider store={store}>
        <GameWithRedux />
      </Provider>
    );
  });
});
