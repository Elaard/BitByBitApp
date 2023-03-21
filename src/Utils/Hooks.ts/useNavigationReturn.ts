import { useNavigate } from "react-router-dom";

export function useNavigationReturn() {
  const navigate = useNavigate();
  return function () {
    navigate(-1);
  };
}
