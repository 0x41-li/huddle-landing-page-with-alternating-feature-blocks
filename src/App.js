import { GlobalStyles } from "./styles/GlobalStyles";

// sections
import Header from "./sections/header/Header";

// scss
import "./scss/utilities.scss";
import Hero from "./sections/hero/Hero";
import BodyBackground from "./sections/body-background/BodyBackground";
import FirstSection from "./sections/first-section/FirstSection";
import SecondSection from "./sections/second-section/SecondSection";
import Footer from "./sections/footer/Footer";

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

      <Footer />
    </>
  );
};

export default App;
