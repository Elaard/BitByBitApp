import NavbarLink from "./NavbarLink";

const Navbar = () => {
  return <nav className="navbar">
    <ul className="navbar__links">
      <NavbarLink key="wallet" to={"/"} title={"Wallets"} />
      <NavbarLink key="ranking" to={"/ranking"} title={"Ranking"} />
    </ul>
  </nav>
}

export default Navbar;