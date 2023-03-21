import { useLocation } from "react-router-dom";

export function useIsLinkActive(path: string) {
  const location = useLocation();
  return location?.pathname === path;
}
