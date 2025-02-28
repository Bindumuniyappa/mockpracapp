import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <Link to={"/home"} key={"1"}>
        <li>Home</li>
      </Link>
      <Link to={"/contact"} key={"2"}>
        <li>Contact</li>
      </Link>
    </div>
  );
};

export default Nav;
