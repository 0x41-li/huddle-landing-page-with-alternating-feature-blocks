import { GlobalStyles } from "./styles/GlobalStyles";

// sections
import Header from "./section/header/Header";

// scss
import "./scss/utilities.scss";
import Hero from "./section/hero/Hero";
import BodyBackground from "./section/body-background/BodyBackground";

const App = () => {
  return (
    <>
      <GlobalStyles />

      <BodyBackground />

      <Header />

      <main>
        <Hero />
      </main>
    </>
  );
};

export default App;
