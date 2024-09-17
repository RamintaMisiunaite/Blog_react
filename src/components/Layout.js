import { Outlet, Link } from "react-router-dom";
import './Layout.css'
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <>
      <Navbar/>
      <Outlet />
      <footer>this is a footer</footer>
    </>
  )
};

export default Layout;