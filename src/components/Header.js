import React, { useState } from "react";
import { headerInfo } from "./data";

const Header = () => {
  const [currentUser, setCurrentUser] = useState(0);

  const menuLinks = headerInfo[currentUser].menuLinks.map((menuItem, index) => {
    return <li>{menuItem}</li>;
  });

  return (
    <>
      <nav className="navbar">
        <section>
          <ul>{menuLinks}</ul>
        </section>
        <section>{headerInfo[currentUser].currentProfile}</section>
      </nav>
    </>
  );
};

export default Header;
