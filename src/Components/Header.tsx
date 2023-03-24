import { Paths } from "../Paths";
import NavbarLink from "./NavbarLink";

const Header = () => {
  return <header className="header">
    <div className="header__logo-box">
      <img src={"../icons/wallet-white.svg"} alt="Logo" className="header__logo" />
    </div>
    <div className="header__text-box">
      <h1 className="heading-primary">
        <span className="heading-primary--main">the bit by bit project</span>
      </h1>
    </div>
    <div className="header__title">
      stay up to date with cryptocurrencies
    </div>
    <NavbarLink key="wallets" to={Paths.Wallets} title={"Wallets"} imageSource={"../icons/wallet-white.svg"} />
  </header>

}

export default Header;