import styled from "styled-components";

// images
import backgroundMobile from "../../assets/images/background-mobile.png";
import backgroundDesktop from "../../assets/images/background-desktop.png";

export const BackgroundDiv = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 721px;

  z-index: -999;

  overflow: hidden;

  background: url(${backgroundMobile}) no-repeat top left / cover;

  @media screen and (min-width: 768px) {
    height: 440px;
  }

  @media screen and (min-width: 992px) {
    background: url(${backgroundDesktop}) no-repeat top left;
    height: 641px;
  }

  @media screen and (min-width: 1440px) {
    height: 741px;
  }
`;
