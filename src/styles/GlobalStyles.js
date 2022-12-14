import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

  *, *::after, *::before, html, body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
    border: none;
  }

  img {
    max-width: 100%;
  }


`;
