import { Outlet } from "react-router-dom";
import NavbarLink from "./Components/NavbarLink";

const Navbar = () => {
  return <>
    <nav className="navbar">
      <ul className="nav-links">
        <NavbarLink key="wallet" to={"/"} title={"Wallets"} />
        <NavbarLink key="ranking" to={"/ranking"} title={"Ranking"} />
      </ul>
    </nav>
    <Outlet />
  </>
}

export default Navbar;