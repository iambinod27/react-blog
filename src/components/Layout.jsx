import { Outlet } from "react-router-dom";
import { Footers } from "./Footers";
import Navbars from "./Navbars";

const Layout = () => {
  return (
    <>
      <Navbars />

      <div className="w-[80%] mx-auto">
        <Outlet />
      </div>

      <Footers />
    </>
  );
};
export default Layout;
