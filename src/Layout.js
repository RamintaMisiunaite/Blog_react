import { Outlet, Link } from "react-router-dom";
import './Layout.css'
import Navbar from "./components/Navbar";

const Layout = () => {
  return (
    <>
      <Navbar/>
      <Outlet />
    </>
  )
};

export default Layout;