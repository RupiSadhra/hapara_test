import React, { useState } from "react";
import { data } from "./headerInfo";
import TopMenu from "./TopMenu";

const Header = () => {
  const [user, setUser] = useState(0);

  return (
    <>
      <TopMenu data={data[user]} />
    </>
  );
};

export default Header;
