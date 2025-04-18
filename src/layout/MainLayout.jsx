import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navber from "../components/Navber";
import Footer from "../components/Footer";

const MainLayout = () => {
  const location = useLocation();
  return (
    <div className="max-w-7xl mx-auto">
        {/* {location.pathname=='/'&& <Navber></Navber>} */}
        <Navber></Navber>
      <div className="bg-black text-white">
        <Outlet></Outlet>
      </div>
      {/* {location.pathname=='/'&&  <Footer></Footer>} */}
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
