import React from "react";
import { Outlet } from "react-router-dom";
import FooterHome from "../components/FooterHome/FooterHome";
import HeaderHome from "../components/HeaderHome/HeaderHome";

const HomeTemplate = () => {
  return (
    <>
      <HeaderHome />
      <div className="div">
        <Outlet />
      </div>
      <FooterHome />
    </>
  );
};

export default HomeTemplate;
