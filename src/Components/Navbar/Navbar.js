import React from "react";
import { Navbar, Nav } from "react-bootstrap";
// , Form, Button
import { NavLink } from "react-router-dom";

import "./Navbar.css";

const NavBar = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>Users API</Navbar.Brand>
        <Nav className="mr-auto">
          <NavLink
            exact
            to="/"
            className="app-link"
            activeClassName="active-link"
          >
            Home
          </NavLink>
          <NavLink
            to="/users"
            className="app-link"
            activeClassName="active-link"
          >
            Users
          </NavLink>
        </Nav>
      </Navbar>
    </div>
  );
};

export default NavBar;
