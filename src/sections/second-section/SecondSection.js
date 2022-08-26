import { BoxButton, BoxH2, Section, SectionBox } from "./SecondSection.style";

const SecondSection = () => {
  return (
    <Section>
      <SectionBox>
        <BoxH2 className="poppins-semibold">Ready To Build Your Community?</BoxH2>
        <BoxButton className="open-sans-bold">Get Started For Free</BoxButton>
      </SectionBox>
    </Section>
  );
};

export default SecondSection;
