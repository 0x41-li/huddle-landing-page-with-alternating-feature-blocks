import styled from "styled-components";

export const Section = styled.section`
  position: relative;
  z-index: 991;

  height: 229px;

  overflow: visible;

  padding: 1px 11px 0px 12px;

  @media screen and (min-width: 576px) {
    padding: 0;
  }

  @media screen and (min-width: 992px) {
    height: 344px;
  }
`;

export const SectionBox = styled.div`
  max-width: 500px;

  margin: 0 auto;
  margin-top: 119px;

  padding: 41px 12px;

  background: #ffffff;
  box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.0710768);
  border-radius: 15px;

  @media screen and (min-width: 992px) {
    max-width: 800px;
    padding: 56px 126px 52px 130px;
    margin-top: 159px;
  }
`;

export const BoxH2 = styled.h2`
  font-size: 18px;
  line-height: 30px;

  color: #00252e;

  text-align: center;

  @media screen and (min-width: 992px) {
    font-size: 32px;
    line-height: 60px;
  }
`;

export const BoxButton = styled.button`
  color: #ffffff;

  display: block;

  margin: 0 auto;
  margin-top: 24px;

  width: 200px;
  height: 40px;

  transition: background-color 0.15s;

  background-color: #ff52c1;
  box-shadow: 0px 3px 7px rgba(0, 37, 46, 0.223053);
  border-radius: 20px;

  font-size: 10px;
  line-height: 15px;

  &:hover {
    background-color: #ff9adb;
  }

  @media screen and (min-width: 992px) {
    width: 400px;
    height: 80px;

    font-size: 20px;
    line-height: 30px;

    box-shadow: 0px 6px 13px rgba(0, 37, 46, 0.223053);
    border-radius: 40px;

    margin-top: 32px;
  }
`;
