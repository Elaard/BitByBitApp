const defaultAction = () => null;

export function useOnReloadPage(action?: () => void) {
  const actionFn = action ?? defaultAction;
  window.addEventListener("beforeunload", actionFn);
  return () => {
    window.removeEventListener("beforeunload", actionFn);
  };
}
