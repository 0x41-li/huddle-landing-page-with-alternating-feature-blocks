import styled from "styled-components";

// icons
import { ReactComponent as LocationSVG } from "../../assets/images/location-icon.svg";
import { ReactComponent as PhoneSVG } from "../../assets/images/phone-in-talk-icon.svg";
import { ReactComponent as EmailSVG } from "../../assets/images/email-icon.svg";
import { ReactComponent as FacebookSVG } from "../../assets/images/facebook-icon.svg";
import { ReactComponent as TwitterSVG } from "../../assets/images/twitter-icon.svg";
import { ReactComponent as InstagramSVG } from "../../assets/images/instagram-icon.svg";

export const FooterEl = styled.footer`
  position: relative;
  z-index: 990;

  background: #00252e;

  padding: 139px 21px 46px 16px;
  @media screen and (min-width: 992px) {
    display: flex;
  }
`;

// logo
export const Logo = styled.img`
  width: 167px;
  height: 26px;
`;

// company info
export const CompanyInfo = styled.div`
  flex: 0 0 auto;
`;

export const CompanyInfoBox = styled.div`
  display: flex;
  gap: 16px;

  margin-top: 25px;

  &:nth-child(2) {
    margin-top: 24px;
  }
`;

export const InfoBoxIconWrapper = styled.div`
  flex: 0 0 24px;
  height: 24px;
`;

export const InfoBoxPara = styled.p.attrs({
  className: "open-sans-regular",
})`
  font-size: 14px;
  line-height: 24px;

  color: #ffffff;
`;

// location Icon
export const LocationIcon = styled(LocationSVG)`
  display: block;

  width: 12.38px;
  height: 18px;

  margin-top: 7px;
`;

export const PhoneIcon = styled(PhoneSVG)`
  display: block;

  width: 18px;
  height: 18px;

  margin-left: 3px;
`;

export const EmailIcon = styled(EmailSVG)`
  display: block;

  width: 20px;
  height: 16px;

  margin-left: 2px;
  margin-top: 4px;
`;

// menus
export const FooterMenusWrapper = styled.div`
  flex: 0 0 auto;

  display: flex;
  flex-direction: column;
  gap: 16px;

  margin-top: 41px;

  &:nth-child(4) {
    margin-top: 16px;
  }
`;

export const FirstMenuAnchor = styled.a.attrs({
  className: "open-sans-regular",
})`
  font-size: 14px;
  line-height: 27px;

  color: #ffffff;
`;

// social media and copyright
export const SocialMediaAndCopyrightWrapper = styled.div`
  margin-top: 24px;
`;

export const SocialMediaWrapper = styled.div`
  display: flex;
  justify-content: center;

  gap: 12px;
`;

export const SocialMediaAnchor = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 31px;
  height: 31px;

  border-radius: 50%;

  border: 0.918357px solid #dfe4f0;
`;

export const FacebookIcon = styled(FacebookSVG)`
  width: 7.03px;
  height: 14.73px;
`;

export const TwitterIcon = styled(TwitterSVG)`
  width: 20.3px;
  height: 20.15px;
`;

export const InstagramIcon = styled(InstagramSVG)`
  width: 14.69px;
  height: 14.59px;
`;

// copyright
export const CopyrightPara = styled.p.attrs({
  className: "poppins-regular",
})`
  font-size: 11.1304px;
  line-height: 17px;
  color: #ffffff;

  margin-top: 24px;

  text-align: center;
`;
