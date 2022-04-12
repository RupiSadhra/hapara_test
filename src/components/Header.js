import React, { useState } from "react";
import { headerInfo } from "./data";
import logoImage from "../images/logo.svg";

const Header = () => {
  const [currentUser, setCurrentUser] = useState(0);

  const menuLinks = headerInfo[currentUser].menuLinks.map((menuItem, index) => {
    return <li>{menuItem}</li>;
  });

  return (
    <>
      <nav className="navbar">
        <section class="menu-left">
          <img src={logoImage}></img>
          <ul>{menuLinks}</ul>
        </section>
        <section>{headerInfo[currentUser].currentProfile}</section>
      </nav>
    </>
  );
};

export default Header;
