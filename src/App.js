import { GlobalStyles } from "./styles/GlobalStyles";

// sections
import Header from "./section/header/Header";

// scss
import "./scss/utilities.scss";
import Hero from "./section/hero/Hero";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Hero />
    </>
  );
};

export default App;
