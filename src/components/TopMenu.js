import React, { useState } from "react";
import logoWhite from "../images/logo.svg";
import logoDark from "../images/logo-dark.svg";
import arrowUp from "../images/arrow-angle-up.svg";
import arrowDown from "../images/arrow-angle-down.svg";
import Dropdown from "./Dropdown";
import { MdSort, MdClear } from "react-icons/md";
import { Link } from "react-router-dom";

const TopMenu = ({ data, stateChanger, user }) => {
  const [dropdown, setDropdown] = useState(false);

  const [hamburger, setHamburger] = useState(true);

  const [logo, setLogo] = useState(0);

  const closeMenu = () => {
    setHamburger(!hamburger);
  };

  const showDropdown = () => {
    setDropdown(true);
  };
  const hideDropdown = () => {
    setDropdown(false);
  };

  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };

  const enterLogo = () => {
    setLogo(1);
  };
  const leaveLogo = () => {
    setLogo(0);
  };

  const menuLinks = data.menuLinks.map((menuItem, index) => {
    if (index === 0) {
      return (
        <li key={index} className="default-color">
          {menuItem}
        </li>
      );
    }
    return <li key={index}>{menuItem}</li>;
  });

  const mobileMenuLinks = data.menuLinks.map((menuItem, index) => {
    return (
      <li key={index} onClick={closeMenu}>
        {menuItem}
      </li>
    );
  });

  return (
    <>
      <nav className="navbar">
        <section className="menu-left centered">
          <img
            onMouseEnter={enterLogo}
            onMouseLeave={leaveLogo}
            className="logo"
            src={`${logo ? logoDark : logoWhite}`}
          ></img>
          <ul className="menu-left-links">{menuLinks}</ul>
        </section>
        <section className="menu-right centered">
          <div onMouseEnter={showDropdown} onClick={toggleDropdown}>
            {data.currentProfile}
            <img
              className="arrow"
              src={`${!dropdown ? arrowDown : arrowUp}`}
            ></img>
          </div>
          <Dropdown
            stateChanger={stateChanger}
            user={user}
            dropdown={dropdown}
            hideDropdown={hideDropdown}
            menuLinks={data.dropdownLinks}
          />
        </section>
        <div
          className="hamburger"
          onClick={() => {
            setHamburger(!hamburger);
          }}
        >
          {hamburger ? <MdSort /> : <MdClear />}
        </div>
      </nav>

      {/* mobile menu */}
      <div
        className="mobile-menu-container center-element"
        id={hamburger ? "zerowidth" : "fullwidth"}
      >
        <nav className="mobile-navbar centered col">
          <ul
            className="mobile-nav-links"
            id={!hamburger ? "show-element" : "hide-element"}
          >
            {mobileMenuLinks}
            <li onClick={toggleDropdown} className="menu-right centered">
              {data.currentProfile}
              <img
                className="arrow"
                src={`${!dropdown ? arrowDown : arrowUp}`}
              ></img>
              <Dropdown
                stateChanger={stateChanger}
                user={user}
                dropdown={dropdown}
                menuLinks={data.dropdownLinks}
              />
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default TopMenu;
