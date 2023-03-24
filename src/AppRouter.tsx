import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./Pages/ErrorPage";
import WalletPage from "./Pages/WalletPage";
import { Paths } from "./Paths";
import Layout from "./Components/Layout";
import PageContainer from "./Components/PageContainer";
import PageContext from "./Pages/PageContext";
import CoinPage from "./Pages/CoinPage";

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: Paths.Wallets,
        element: <WalletPage />,
        errorElement: <ErrorPage />
      },
      {
        path: Paths.Coins,
        element: <CoinPage />,
        errorElement: <ErrorPage />,
      }
    ]
  }
]);

const AppRouter = () => {
  return <PageContext>
    <RouterProvider router={router} />
  </PageContext>
}

export default AppRouter;