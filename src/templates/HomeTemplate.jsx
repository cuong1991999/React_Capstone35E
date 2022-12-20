import React from "react";
import { Outlet } from "react-router-dom";
import FooterHome from "../components/FooterHome/FooterHome";
import HeaderHome from "../components/HeaderHome/HeaderHome";
const HomeTemplate = () => {
  return (
    <>
      <HeaderHome />

      <section style={{ minHeight: "100vh" }}>
        <Outlet />
      </section>
      <FooterHome />
    </>
  );
};

export default HomeTemplate;
