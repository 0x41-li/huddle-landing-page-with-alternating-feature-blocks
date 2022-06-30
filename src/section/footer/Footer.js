import {
  CompanyInfo,
  CompanyInfoBox,
  EmailIcon,
  FirstMenuAnchor,
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
} from "./Footer.style";

// images
import LogoImage from "../../assets/images/footer-logo.png";

const Footer = () => {
  return (
    <FooterEl>
      <div className="container">
        <Logo src={LogoImage} />
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
          <FirstMenuAnchor href="#">About Us</FirstMenuAnchor>
          <FirstMenuAnchor href="#">What We Do</FirstMenuAnchor>
          <FirstMenuAnchor href="#">FAQ</FirstMenuAnchor>
        </FooterMenusWrapper>
        <FooterMenusWrapper>
          <FirstMenuAnchor href="#">Career</FirstMenuAnchor>
          <FirstMenuAnchor href="#">Blog</FirstMenuAnchor>
          <FirstMenuAnchor href="#">Contact Us</FirstMenuAnchor>
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
      </div>
    </FooterEl>
  );
};

export default Footer;
