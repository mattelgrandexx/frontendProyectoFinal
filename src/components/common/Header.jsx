import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <Navbar className="bgNavbar" variant="dark" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-center align-items-center"
        >
          <Nav className="nav px-5 align-items-center">
            <div className="navDivisor d-flex flex-column flex-lg-row align-items-center justify-content-evenly ">
              <NavLink to="/" className="nav-item nav-link">
                Inicio
              </NavLink>
              <NavLink to="/acerca" className="nav-item nav-link">
                Nosotros
              </NavLink>
            </div>
            <div className="navDivisor d-flex justify-content-center  ">
              <Navbar.Brand className="m-0" as={Link} to="/">
                <img
                  src="https://trello.com/1/cards/636afa161043510112cf6151/attachments/636ef445cbe2c4032d6284cb/previews/636ef446cbe2c4032d6284d4/download/LENOLOGO2.png"
                  alt="logo"
                  className="logoLeno"
                />
              </Navbar.Brand>
            </div>
            <div className="navDivisor d-flex flex-column flex-lg-row align-items-center justify-content-evenly">
              {/* componente condicional (admin) */}
              <NavLink to="/administrador" className="nav-item nav-link">
                Admin
              </NavLink>
              <NavLink end to="/login" className="nav-item nav-link">
                Login
              </NavLink>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};
