import React from 'react'
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <Navbar bg="danger" variant="dark" expand="lg">
    <Container>
     <Navbar.Brand as={Link} to="/">
        Cafeteria
      </Navbar.Brand>
   
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <NavLink to="/" className="nav-item nav-link">
            Inicio
          </NavLink>
        <NavLink to="/administrar" className="nav-item nav-link">
          Administrar
        </NavLink>
        </Nav>
      </Navbar.Collapse>
    
    
      <Navbar.Collapse className="justify-content-end">
     <NavLink to="/usuario">Lo`gin</NavLink>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);
};
