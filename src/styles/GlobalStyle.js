import { createGlobalStyle } from "styled-components";
import { Normalize } from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
  ${Normalize}

  * {
    font-family: 'Open Sans';
  }
`;
