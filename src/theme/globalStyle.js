import { injectGlobal } from "styled-components";

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,900|Lobster');

  body {
    padding: 0;
    margin: 20px;
    font-family: Lobster, cursive;
  }

  h1 {
    font-family: Montserrat;
  }
`;
