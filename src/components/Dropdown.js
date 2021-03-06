import React from "react";

const changeUser = () => {};
const Dropdown = ({
  stateChanger,
  user,
  dropdown,
  hideDropdown,
  menuLinks,
}) => {
  const handleStateChange = () => {
    user ? stateChanger(0) : stateChanger(1);
  };
  const dropdownMenu = menuLinks.map((menuLink, index) => {
    if (index === 0) {
      return (
        <li key={index} className="user-email" onClick={handleStateChange}>
          {menuLink}
        </li>
      );
    }
    return <li key={index}>{menuLink}</li>;
  });
  return (
    <>
      <ul
        onMouseLeave={hideDropdown}
        className={`dropdown-container ${
          dropdown ? "show-element" : "hide-element"
        }`}
      >
        {dropdownMenu}
      </ul>
    </>
  );
};

export default Dropdown;
