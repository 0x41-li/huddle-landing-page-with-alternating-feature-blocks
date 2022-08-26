import { Button, HeaderSec, Logo } from "./Header.style";

// images
import LogoImage from "../../assets/images/logo.png";

const Header = () => {
  return (
    <HeaderSec className="container">
      <Logo src={LogoImage} />
      <Button className="open-sans-bold">Try It Free</Button>
    </HeaderSec>
  );
};

export default Header;
