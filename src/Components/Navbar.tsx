import { Paths } from "../Paths";
import NavbarLink from "./NavbarLink";

const Navbar = () => {
  return <nav className="navbar">
    <ul className="navbar__links">
      <NavbarLink key="ranking" to={Paths.Crypto} title={"Crypto curriences"} imageSource={"../icons/crypto-white.png"} />
      <NavbarLink key="wallet" to={Paths.Wallet} title={"Wallets"} imageSource={"../icons/wallet-white.svg"} />
      <NavbarLink key="wallet" to={Paths.Etf} title={"ETF"} imageSource={"../icons/wallet-white.svg"} />
      <NavbarLink key="wallet" to={Paths.Materials} title={"Materials"} imageSource={"../icons/wallet-white.svg"} />
    </ul>
  </nav>
}

export default Navbar;