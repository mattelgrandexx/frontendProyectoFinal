import React, { useState, useEffect } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import ListaCarrito from "../views/pedidosComponents/ListaCarrito";

export const Header = () => {
  let storageUser = JSON.parse(localStorage.getItem("usuarioActivo")) || [];
  const [userActive, setUserActive] = useState(false);

  useEffect(() => {
    if (storageUser.length !== 0) {
      setUserActive(true);
    }
  }, [setUserActive, storageUser]);

  const navigate = useNavigate();

  const cerrarSesion = () => {
    Swal.fire({
      title: "Estas seguro que deseas cerrar sesion?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: '#c0050b',
      cancelButtonColor: '#000',
      confirmButtonText: 'Cerrar sesion',
      cancelButtonText: 'Cancelar' 
    }).then((result) => {
      if (result.isConfirmed) {
        setUserActive(false);
        localStorage.removeItem("usuarioActivo");
        navigate("/login");
      }
    });
  };

  return (
    <Navbar variant="dark" expand="lg">
      <Container id="navContainer">
        <Navbar.Brand as={Link} to="/">
          LENO
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" id="btnNavbar" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-center align-items-center ms-5 me-0"
        >
          <Nav className="nav d-flex ms-2 align-items-center">
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
                  src="https://i.postimg.cc/C5dLrpvt/LENOLOGO2.png"
                  alt="logo"
                  className="logoLeno"
                />
              </Navbar.Brand>
            </div>
            {/* componente condicional (admin) */}
            
            { 
            userActive ? 
            <div className="navDivisor d-flex flex-column flex-lg-row align-items-center justify-content-evenly">
            <NavLink to="/administrar" className="nav-item nav-link">
              Admin
            </NavLink>
            <Link variant="none" as="button" onClick={() => cerrarSesion()} className="nav-item nav-link d-flex">
              Cerrar sesion
            </Link>
            </div>
             : 
            <NavLink end to="/login" className="nav-item nav-link d-flex">
              Iniciar sesion
            </NavLink>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
      <ListaCarrito></ListaCarrito>
    </Navbar>
  );
};
