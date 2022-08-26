import {
  CompanyInfo,
  CompanyInfoBox,
  EmailIcon,
  MenuAnchor,
  FooterMenusWrapper,
  FooterEl,
  InfoBoxIconWrapper,
  InfoBoxPara,
  LocationIcon,
  Logo,
  PhoneIcon,
  SocialMediaWrapper,
  SocialMediaAnchor,
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  SocialMediaAndCopyrightWrapper,
  CopyrightPara,
  FooterContainer,
  LogoWrapper,
} from "./Footer.style";

// images
import LogoImage from "../../assets/images/footer-logo.png";

const Footer = () => {
  return (
    <FooterEl>
      <FooterContainer>
        <LogoWrapper>
          <Logo src={LogoImage} />
        </LogoWrapper>
        <CompanyInfo>
          <CompanyInfoBox>
            <InfoBoxIconWrapper>
              <LocationIcon />
            </InfoBoxIconWrapper>
            <InfoBoxPara>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </InfoBoxPara>
          </CompanyInfoBox>
          <CompanyInfoBox>
            <InfoBoxIconWrapper>
              <PhoneIcon />
            </InfoBoxIconWrapper>
            <InfoBoxPara>+1-543-123-4567</InfoBoxPara>
          </CompanyInfoBox>
          <CompanyInfoBox>
            <InfoBoxIconWrapper>
              <EmailIcon />
            </InfoBoxIconWrapper>
            <InfoBoxPara>example@fylo.com</InfoBoxPara>
          </CompanyInfoBox>
        </CompanyInfo>
        <FooterMenusWrapper>
          <MenuAnchor href="#">About Us</MenuAnchor>
          <MenuAnchor href="#">What We Do</MenuAnchor>
          <MenuAnchor href="#">FAQ</MenuAnchor>
        </FooterMenusWrapper>
        <FooterMenusWrapper>
          <MenuAnchor href="#">Career</MenuAnchor>
          <MenuAnchor href="#">Blog</MenuAnchor>
          <MenuAnchor href="#">Contact Us</MenuAnchor>
        </FooterMenusWrapper>
        <SocialMediaAndCopyrightWrapper>
          <SocialMediaWrapper>
            <SocialMediaAnchor href="#" aria-label="Go To Fylo Facebook Page">
              <FacebookIcon />
            </SocialMediaAnchor>
            <SocialMediaAnchor href="#" aria-label="Go To Fylo Twitter Page">
              <TwitterIcon />
            </SocialMediaAnchor>
            <SocialMediaAnchor href="#" aria-label="Go To Fylo Instagram Page">
              <InstagramIcon />
            </SocialMediaAnchor>
          </SocialMediaWrapper>
          <CopyrightPara>
            © Copyright 2018 Huddle. All rights reserved.
          </CopyrightPara>
        </SocialMediaAndCopyrightWrapper>
      </FooterContainer>
    </FooterEl>
  );
};

export default Footer;
