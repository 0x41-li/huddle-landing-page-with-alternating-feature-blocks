import {
  Box,
  BoxH2,
  BoxPara,
  BoxTextWrapper,
  FlowingConversationsBoxImage,
  GrowTogetherBoxImage,
  Section,
  YourUsersBoxImage,
} from "./FirstSection.style";

// images
import growTogetherImage from "../../assets/images/grow-together-illustr.png";
import flowingConversationsImage from "../../assets/images/flowing-conversations-illustr.png";
import yourUsersImage from "../../assets/images/your-users-illustr.png";

const FirstSection = () => {
  return (
    <Section className="container">
      <Box>
        <GrowTogetherBoxImage src={growTogetherImage} />
        <BoxTextWrapper>
          <BoxH2 className="poppins-semibold">Grow Together</BoxH2>
          <BoxPara className="open-sans-regular">
            Generate meaningful discussions with your audience and build a
            strong, loyal community. Think of the insightful conversations you
            miss out on with a feedback form.
          </BoxPara>
        </BoxTextWrapper>
      </Box>

      <Box>
        <FlowingConversationsBoxImage src={flowingConversationsImage} />
        <BoxTextWrapper>
          <BoxH2 className="poppins-semibold">Flowing Conversations</BoxH2>
          <BoxPara className="open-sans-regular">
            You wouldn't paginate a conversation in real life, so why do it
            online? Our threads have just-in-time loading for a more natural
            flow.
          </BoxPara>
        </BoxTextWrapper>
      </Box>

      <Box>
        <YourUsersBoxImage src={yourUsersImage} />
        <BoxTextWrapper>
          <BoxH2 className="poppins-semibold">Your Users</BoxH2>
          <BoxPara className="open-sans-regular">
            It takes no time at all to integrate Huddle with your app's
            authentication solution. This means, once signed in to your app,
            your users can start chatting immediately.
          </BoxPara>
        </BoxTextWrapper>
      </Box>
    </Section>
  );
};

export default FirstSection;
