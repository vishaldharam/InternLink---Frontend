import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import ScrollToTop from "./utils/ScrollToTop";

const Layout = ({isTest}) => {
  return (
    <>
     {!isTest && <Navbar /> }   {/* Always renders */}
      <ScrollToTop/>
      <Outlet />   {/* Renders child route component */}
    </>
  );
};

export default Layout