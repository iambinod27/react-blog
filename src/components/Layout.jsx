import { Outlet } from "react-router-dom";
import Navbars from "./Navbars";

const Layout = () => {
  return (
    <>
      <Navbars />
      <Outlet />
    </>
  );
};
export default Layout;
