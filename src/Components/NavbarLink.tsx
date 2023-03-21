import { Link } from "react-router-dom";
import LinkImage from "./LinkImage";
import LinkText from "./LinkText";

interface NavbarLinkProps {
  to: string;
  title: string;
  imageSource: string;
}

const NavbarLink = ({ to, title, imageSource }: NavbarLinkProps) => {
  return <li className="navbar-link">
    <Link className="navbar-link__element" to={to}>
      <LinkImage src={imageSource} />
      <LinkText text={title} />
    </Link>
  </li>
}



export default NavbarLink;