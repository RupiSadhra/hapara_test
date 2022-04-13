import React from "react";
import logo from "../images/logo.svg";
import arrowUp from "../images/arrow-angle-up.svg";
import arrowDown from "../images/arrow-angle-down.svg";
import Dropdown from "./Dropdown";

const TopMenu = ({ data }) => {
  const showDropdown = () => {};
  const menuLinks = data.menuLinks.map((menuItem, index) => {
    return <li>{menuItem}</li>;
  });

  return (
    <>
      <nav className="navbar">
        <section class="menu-left centered">
          <img src={logo}></img>
          <ul>{menuLinks}</ul>
        </section>
        <section onMouseEnter={showDropdown} className="menu-right centered">
          {data.currentProfile}
          <img className="arrow" src={arrowDown}></img>
          <Dropdown menuLinks={data.dropdownLinks} />
        </section>
      </nav>
    </>
  );
};

export default TopMenu;
