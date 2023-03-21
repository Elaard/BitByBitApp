import { Link } from "react-router-dom";

interface NavbarLinkProps {
  to: string;
  title: string;
}

const NavbarLink = ({ to, title }: NavbarLinkProps) => {
  return <li className="navbar-link">
    <Link className="navbar-link__element" to={to}>
      {title}
    </Link>
  </li>
}


export default NavbarLink;