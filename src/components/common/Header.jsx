import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
   <Navbar bg="danger" variant="dark" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/" className='nav-item nav-link'>
              Inicio
            </NavLink>
          <Navbar.Brand as={Link} to="/">
          <img src="https://trello.com/1/cards/636afa161043510112cf6151/attachments/636ef449b07b4100170437c7/previews/636ef44ab07b4100170437d0/download/LENOLOGO4.png" alt="logo" className="logoLeno" />
        </Navbar.Brand>
           
              <NavLink end to="/login" className="nav-item nav-link">
                login
              </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
};
