import { createGlobalStyle } from "styled-components";

// images
import backgroundMobile from "../assets/images/background-mobile.png";
import backgroundDesktop from "../assets/images/background-desktop.png";

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

  body {
    background: url(${backgroundMobile}) no-repeat top left / cover;

    @media screen and (min-width: 992px) {
      background: url(${backgroundDesktop}) no-repeat top left;
    }
  }

`;
