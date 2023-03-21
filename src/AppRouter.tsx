import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CoinsPage from "./CoinsPage";
import ErrorPage from "./ErrorPage";
import Navbar from "./Navbar";
import WalletPage from "./WalletPage";

const router = createBrowserRouter([
  {
    element: <Navbar />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <WalletPage />,
      },
      {
        path: '/ranking',
        element: <CoinsPage />,
      }
    ]
  }
]);

function AppRouter() {
  return <RouterProvider router={router} />
}

export default AppRouter;