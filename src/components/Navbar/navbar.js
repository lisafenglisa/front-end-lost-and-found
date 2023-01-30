import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/home" activestyle="true">
            Home
          </NavLink>
          <NavLink to="/category" activestyle="true">
            Category
          </NavLink>
          <NavLink to="/browse" activestyle="true">
            Browse
          </NavLink>
          <NavLink to="/about" activestyle="true">
            About Us
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
