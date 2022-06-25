import { GlobalStyles } from "./styles/GlobalStyles";

// sections
import Header from "./section/header/Header";

// scss
import "./scss/utilities.scss";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
    </>
  );
};

export default App;
