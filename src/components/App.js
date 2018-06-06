import React, { Component } from "react";
import Header from "./Header";
import { GameWithRedux } from "../containers/Game";
import Footer from "./Footer";
// import "../theme/globalStyle";
import "../../node_modules/materialize-css/dist/css/materialize.min.css";
import "./App.css";

class App extends Component {
  render() {
    const primaryColor = "deep-purple darken-4";
    // const secondaryColor = "blue darken-1";
    return (
      <div className="app container">
        <Header text={"Tic-Tac-Toe"} primaryColor={primaryColor} />
        <div className="app-content">
          <GameWithRedux />
        </div>
        <Footer primaryColor={primaryColor} />
      </div>
    );
  }
}

export default App;
