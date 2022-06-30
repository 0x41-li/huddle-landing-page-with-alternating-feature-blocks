import styled from "styled-components";

export const Section = styled.section`
  margin-top: 80px;

  padding: 0px 35px 0px 36px;

  height: 590px;

  @media screen and (min-width: 768px) {
    display: flex;
    gap: 20px;
    padding: 0;
    height: 316px;
  }

  @media screen and (min-width: 992px) {
    gap: 60px;

    height: 474px;

    margin-top: 71px;

    justify-content: space-between;
  }

  @media screen and (min-width: 1440px) {
    gap: 0px;

    height: 554px;

    padding: 0px 10px 0px 0px;

    align-items: start;
  }
`;

export const TextWrapper = styled.div`
  @media screen and (min-width: 768px) {
    flex: 0 1 50%;
  }
  @media screen and (min-width: 1440px) {
    flex: 0 0 530px;
    margin-top: 86px;
  }
`;

export const SectionH1 = styled.h1`
  font-size: 24px;
  line-height: 36px;

  text-align: center;

  color: #00252e;

  @media screen and (min-width: 768px) {
    text-align: left;
  }

  @media screen and (min-width: 992px) {
    font-size: 40px;
    line-height: 60px;
  }
`;

export const SectionPara = styled.p`
  font-size: 16px;
  line-height: 24px;

  text-align: center;

  color: #00252e;

  margin-top: 24px;

  @media screen and (min-width: 768px) {
    text-align: left;
  }

  @media screen and (min-width: 992px) {
    font-size: 18px;
    line-height: 27px;

    margin-top: 32px;
  }
`;

export const SectionButton = styled.button`
  background: #ff52c1;
  box-shadow: 2px 3px 6px 1px rgba(255, 82, 193, 0.166185);
  border-radius: 20px;

  width: 240px;
  height: 40px;

  font-size: 12px;
  line-height: 16px;
  text-align: center;

  color: #ffffff;

  transition: background-color 0.15s;

  display: block;
  margin: 32px auto 0px auto;
  &:hover {
    background: #ff9adb;
  }

  @media screen and (min-width: 768px) {
    margin: 32px 0px 0px 0px;
  }

  @media screen and (min-width: 992px) {
    width: 280px;
    height: 56px;

    border-radius: 28px;

    font-size: 14px;
    line-height: 19px;
  }
`;

// illustration
export const SectionIllustr = styled.div`
  width: 100%;
  max-width: 296px;
  height: 209px;

  margin: 56px auto 0px auto;
  @media screen and (min-width: 768px) {
    margin: 0;
    max-width: 100%;
    height: unset;

    flex: 0 1 50%;
  }

  @media screen and (min-width: 1440px) {
    flex: 0 0 687px;
    position: relative;
    top: -7px;
  }
`;

export const SectionImg = styled.img`
  display: block;
`;
