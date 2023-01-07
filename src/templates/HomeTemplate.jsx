import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import FooterHome from "../components/FooterHome/FooterHome";
import HeaderHome from "../components/HeaderHome/HeaderHome";
import { getProfileApi } from "../redux/reducer/userReducer";
const HomeTemplate = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getProfileApi)
  },[])
  return (
    <>
      <HeaderHome />

      <section
        className="py-5 "
        style={{ backgroundColor: "rgba(153, 153, 153, 0.1)" }}
      >
        <Outlet />
      </section>
      <FooterHome />
    </>
  );
};

export default HomeTemplate;
