import React from "react";

const changeUser = () => {};
const Dropdown = ({ menuLinks }) => {
  const dropdownMenu = menuLinks.map((menuLink, index) => {
    if (index == 0) {
      return (
        <li className="user-email" onClick={changeUser}>
          {menuLink}
        </li>
      );
    } else {
      return <li>{menuLink}</li>;
    }
  });
  return (
    <>
      <ul className="dropdown-container">{dropdownMenu}</ul>
    </>
  );
};

export default Dropdown;
