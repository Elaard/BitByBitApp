import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CryptoPage from "./Pages/CryptoPage";
import ErrorPage from "./Pages/ErrorPage";
import WalletPage from "./Pages/WalletPage";
import { Paths } from "./Paths";
import Layout from "./Components/Layout";
import PageContainer from "./Components/PageContainer";

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: Paths.Wallet,
        element: <PageContainer children={<WalletPage />} />,
        errorElement: <ErrorPage />
      },
      {
        path: Paths.Crypto,
        element: <PageContainer children={<CryptoPage />} />,
        errorElement: <ErrorPage />,
      }
    ]
  }
]);

const AppRouter = () => <RouterProvider router={router} />

export default AppRouter;