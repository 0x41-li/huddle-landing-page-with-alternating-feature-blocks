import {
  Section,
  SectionButton,
  SectionH1,
  SectionIllustr,
  SectionImg,
  SectionPara,
  TextWrapper,
} from "./Hero.style";

// images
import illustration from "../../assets/images/hero-illustration.svg";

const Hero = () => {
  return (
    <Section className="container">
      <TextWrapper>
        <SectionH1 className="poppins-semibold">
          Build The Community Your Fans Will Love
        </SectionH1>
        <SectionPara className="open-sans-regular">
          Huddle re-imagines the way we build communities. You have a voice, but
          so does your audience. Create connections with your users as you
          engage in genuine discussion.
        </SectionPara>
        <SectionButton className="open-sans-bold">
          Get Started For Free
        </SectionButton>
      </TextWrapper>
      <SectionIllustr>
        <SectionImg src={illustration} />
      </SectionIllustr>
    </Section>
  );
};

export default Hero;
