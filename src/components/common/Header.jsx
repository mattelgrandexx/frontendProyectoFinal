import React, { useState, useEffect } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import {Container} from "react-bootstrap";

export const Header = () => {

  let storageUser = JSON.parse(localStorage.getItem("usuarioActivo"));
  const [userActive,  setUserActive] = useState(false)

  useEffect(() => {
    if((storageUser)){
      setUserActive(true)
    }
  }, [setUserActive, storageUser])

  const navigate = useNavigate()

  const cerrarSesion = () => {
    Swal.fire({
      title: 'Estas seguro que deseas cerrar sesion?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#c0050b',
      cancelButtonColor: '#000',
      confirmButtonText: 'Cerrar sesion',
      cancelButtonText: 'Cancelar'
      
    }).then((result) => {
      if (result.isConfirmed) {
        setUserActive(false)
        localStorage.removeItem("usuarioActivo");
        navigate("/login")
      }
    })
  }

  return (
    <Navbar  variant="dark" expand="lg">
      <Container>
    
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-center align-items-center"
        >
          <Nav className="nav align-items-center">
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
            <div className="navDivisor d-flex flex-column flex-lg-row align-items-center justify-content-evenly">
            <NavLink to="/administrar" className="nav-item nav-link">
              Admin
            </NavLink>
            
            { 
            userActive ? 
            <Link variant="none" as="button" onClick={() => cerrarSesion()} className="nav-item nav-link d-flex">
              Cerrar sesion
            </Link>
             : 
            <NavLink end to="/login" className="nav-item nav-link d-flex">
              Iniciar sesion
            </NavLink>
            }
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

