import React, { useState, useEffect } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

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
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        setUserActive(false)
        localStorage.removeItem("usuarioActivo");
        navigate("/login")
      }
    })
  }

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
            {/* componente condicional (admin) */}
            <div className="navDivisor d-flex flex-column flex-lg-row align-items-center justify-content-evenly">
            <NavLink to="/administrar" className="nav-item nav-link">
              Admin
            </NavLink>
            
            { 
            userActive ? 
            <Link variant="none" as="button" onClick={() => cerrarSesion()} className="nav-item nav-link d-flex">
              LogOut
            </Link>
             : 
            <NavLink end to="/login" className="nav-item nav-link d-flex">
              Login
            </NavLink>
            }
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};
