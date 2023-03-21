import { Outlet } from "react-router-dom";
import Header from "./Header";
import Navbar from "./Navbar";

const Layout = () => {
  return <div className="layout">
    <Header />
    <div className="layout__main-section">
      <aside className="layout__aside">
        <Navbar />
      </aside>
      <Outlet />
    </div>
  </div>
}

export default Layout;