import React from "react";
import ReactDOM from "react-dom";
import Info from "./Info";

describe("Info component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Info />, div);
  });
  it("renders properly", () => {
    expect(<Info />).toMatchSnapshot();
  });
});
