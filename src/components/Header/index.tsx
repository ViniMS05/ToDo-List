import rocketLogo from "../../assets/rocket.svg";
import { HeaderContainer } from "./style";

export function Header() {
  return (
    <HeaderContainer>
      <div>
        <img src={rocketLogo} alt="" />
        <h1>
          to<strong>do</strong>
        </h1>
      </div>
    </HeaderContainer>
  );
}
