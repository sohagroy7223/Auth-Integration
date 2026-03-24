import React from "react";
import logo from "../../assets/logo.png";

const TopNav = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <img className="w-26 bg-white rounded-2xl " src={logo} alt="" />
    </div>
  );
};

export default TopNav;
