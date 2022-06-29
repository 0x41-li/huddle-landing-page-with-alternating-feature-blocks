import styled from "styled-components";

export const Section = styled.section`
  padding-top: 59px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

export const Box = styled.div`
  padding: 56px 39px 0px 40px;

  &:nth-child(2) {
    padding-top: 65px;
  }

  &:nth-child(3) {
    padding-top: 60px;
  }

  width: 335px;
  height: 488px;

  margin: 0 auto;

  background: #ffffff;
  box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.07);
  border-radius: 16px;

  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    height: auto;
    padding: 56px 39px 56px 40px;
  }
`;

export const BoxTextWrapper = styled.div`
  margin-top: 54px;

  @media screen and (min-width: 768px) {
    margin-top: 0;
    flex: 0 1 50%;
  }
`;

export const BoxH2 = styled.h2`
  font-size: 20px;
  line-height: 30px;

  text-align: center;

  color: #00252e;

  @media screen and (min-width: 768px) {
    text-align: left;
  }
`;

export const BoxPara = styled.p`
  font-size: 14px;
  line-height: 21px;

  text-align: center;

  color: #808e9a;

  margin-top: 16px;

  @media screen and (min-width: 768px) {
    text-align: left;
  }
`;

export const GrowTogetherBoxImage = styled.img`
  display: block;

  width: 236px;
  height: 194px;

  margin: 0 auto;

  @media screen and (min-width: 768px) {
    margin: 0;
  }
`;

export const FlowingConversationsBoxImage = styled.img`
  display: block;

  width: 242.74px;
  height: 172.8px;


  margin: 0 auto;

  margin-bottom: 66px;


  @media screen and (min-width: 768px) {
    order: 2;
    margin: 0;
  }
`;

export const YourUsersBoxImage = styled.img`
  display: block;

  width: 244.11px;
  height: 184.69px;

  margin: 0 auto;

  @media screen and (min-width: 768px) {
    margin: 0;
  }
`;
