import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import CoinsPage from "./Pages/CoinsPage";
import ErrorPage from "./Pages/ErrorPage";
import WalletPage from "./Pages/WalletPage";
import { Paths } from "./Paths";
import Navbar from "./Components/Navbar";
import Layout from "./Components/Layout";

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: Paths.Default,
        element: <WalletPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: Paths.Ranking,
        element: <CoinsPage />,
        errorElement: <ErrorPage />,
      }
    ]
  }
]);

function AppRouter() {
  return <>
    <RouterProvider router={router} />
  </>
}

export default AppRouter;