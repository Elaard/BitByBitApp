import { Link } from "react-router-dom";
import { Paths } from "../Paths";
import { useIsLinkActive } from "../Utils/Hooks.ts/useIsLinkActive";
import LinkImage from "./LinkImage";
import LinkText from "./LinkText";

interface NavbarLinkProps {
  to: string;
  title: string;
  imageSource: string;
}

function useActiveLink(path: string) {
  const isActive = useIsLinkActive(path);
  if (isActive && path === Paths.Cryptos) {
    return true;
  }
  return isActive;
}

const NavbarLink = ({ to, title, imageSource }: NavbarLinkProps) => {
  const isActive = useActiveLink(to);

  const linkClassName = isActive ? "navbar-link link-active" : "navbar-link";

  return <li className={linkClassName}>
    <Link className="navbar-link__element" to={to}>
      <LinkImage src={imageSource} />
      <LinkText text={title} />
    </Link>
  </li>
}



export default NavbarLink;