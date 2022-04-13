import React, { useState } from "react";
import logo from "../images/logo.svg";
import arrowUp from "../images/arrow-angle-up.svg";
import arrowDown from "../images/arrow-angle-down.svg";
import Dropdown from "./Dropdown";

const TopMenu = ({ data, stateChanger, user }) => {
  const [dropdown, setDropdown] = useState(false);

  const showDropdown = () => {
    setDropdown(true);
  };
  const hideDropdown = () => {
    setDropdown(false);
  };

  const menuLinks = data.menuLinks.map((menuItem, index) => {
    return <li>{menuItem}</li>;
  });

  return (
    <>
      <nav className="navbar">
        <section class="menu-left centered">
          <img className="logo" src={logo}></img>
          <ul>{menuLinks}</ul>
        </section>
        <section
          onMouseEnter={showDropdown}
          onMouseLeave={hideDropdown}
          className="menu-right centered"
        >
          {data.currentProfile}
          <img className="arrow" src={arrowDown}></img>
          <Dropdown
            stateChanger={stateChanger}
            user={user}
            dropdown={dropdown}
            menuLinks={data.dropdownLinks}
          />
        </section>
      </nav>
    </>
  );
};

export default TopMenu;
