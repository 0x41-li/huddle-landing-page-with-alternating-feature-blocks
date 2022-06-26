import styled from "styled-components";

export const HeaderSec = styled.header`
  height: 24px;
  padding: 0 16px;

  margin-top: 24px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 576px) {
    padding: 0;
  }

  @media (min-width: 992px) {
    margin-top: 48px;
    height: 48px;
  }
`;

export const Logo = styled.img`
  width: 104px;
  height: 16px;
  display: block;

  @media (min-width: 992px) {
    width: 200px;
    height: 31px;
  }
`;

export const Button = styled.button`
  width: 96px;
  height: 24px;

  background: #ffffff;
  box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.0954201);
  border-radius: 12px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 10px;
  line-height: 14px;

  color: #00252e;

  transition: color 0.15s;

  &:hover {
    color: #808e9a;
  }

  @media (min-width: 992px) {
    width: 200px;
    height: 48px;

    background: #ffffff;
    box-shadow: 0px 3px 11px rgba(0, 0, 0, 0.0954201);
    border-radius: 24px;

    font-size: 14px;
    line-height: 19px;
  }
`;
