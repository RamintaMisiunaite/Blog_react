import { Outlet, Link } from "react-router-dom";
import './Layout.css'
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <>
      <Navbar/>
      <Outlet />
    </>
  )
};

export default Layout;