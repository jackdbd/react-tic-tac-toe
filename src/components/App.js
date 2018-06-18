import React, { Component } from "react";
import styled from "styled-components";
import Header from "./Header";
import { GameWithRedux } from "../containers/Game";
import Footer from "./Footer";
import "../../node_modules/materialize-css/dist/css/materialize.min.css";

// const Container = styled.div`
//   background-color: #0f0;
//   font-family: 'Gloria Hallelujah', cursive;
//   min-height: 100%;
//   display: grid;
//   grid-template-columns: 100%;
//   grid-template-rows: auto 1fr auto;
// `;

const Container = styled.div`
  font-family: "Gloria Hallelujah", cursive;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Content = styled.div`
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: auto;
`;

class App extends Component {
  render() {
    const primaryColor = "deep-purple darken-4";
    const secondaryColor = "teal lighten-2";
    // const secondaryColor = "orange darken-2";
    return (
      <Container>
        <Header text={"Tic-Tac-Toe"} primaryColor={primaryColor} />
        <Content>
          <GameWithRedux
            primaryColor={primaryColor}
            secondaryColor={secondaryColor}
          />
        </Content>
        <Footer primaryColor={primaryColor} />
      </Container>
    );
  }
}

export default App;
