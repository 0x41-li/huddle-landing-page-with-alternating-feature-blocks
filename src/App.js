import { GlobalStyles } from "./styles/GlobalStyles";

// sections
import Header from "./section/header/Header";

// scss
import "./scss/utilities.scss";
import Hero from "./section/hero/Hero";
import BodyBackground from "./section/body-background/BodyBackground";
import FirstSection from "./section/first-section/FirstSection";

const App = () => {
  return (
    <>
      <GlobalStyles />

      <BodyBackground />

      <Header />

      <main>
        <Hero />
        <FirstSection />
      </main>
    </>
  );
};

export default App;
