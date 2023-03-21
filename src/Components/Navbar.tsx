import { Paths } from "../Paths";
import NavbarLink from "./NavbarLink";

const Navbar = () => {
  return <nav className="navbar">
    <ul className="navbar__links">
      <NavbarLink key="ranking" to={Paths.Cryptos} title={"Crypto curriences"} imageSource={"../icons/crypto-white.png"} />
      <NavbarLink key="etfs" to={Paths.Etfs} title={"ETF -> todo"} imageSource={"../icons/etf-white.svg"} />
      <NavbarLink key="materials" to={Paths.Materials} title={"Materials-> todo"} imageSource={"../icons/gold-white.svg"} />
    </ul>
  </nav>
}

export default Navbar;