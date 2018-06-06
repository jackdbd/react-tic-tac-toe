import React from "react";
import { shallow, mount, render } from "enzyme";
import Info from "./Info";
import "../setupEnzymeTests";

describe("Info component", () => {
  it("should render without crashing", () => {
    const wrapper = shallow(<Info />);
  });

  it("renders properly", () => {
    expect(<Info />).toMatchSnapshot();
  });
});
