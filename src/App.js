import { GlobalStyles } from "./styles/GlobalStyles";

// sections
import Header from "./section/header/Header";

// scss
import "./scss/utilities.scss";
import Hero from "./section/hero/Hero";
import BodyBackground from "./section/body-background/BodyBackground";
import FirstSection from "./section/first-section/FirstSection";
import SecondSection from "./section/second-section/SecondSection";

const App = () => {
  return (
    <>
      <GlobalStyles />

      <BodyBackground />

      <Header />

      <main>
        <Hero />
        <FirstSection />
        <SecondSection />
      </main>
    </>
  );
};

export default App;
