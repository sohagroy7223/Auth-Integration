import React from "react";
import { Outlet } from "react-router";
import Navbar from "../../Components/Header/Navbar/Navbar";
import TopNav from "../TopNavbar/TopNav";

const Root = () => {
  return (
    <div>
      <TopNav></TopNav>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
