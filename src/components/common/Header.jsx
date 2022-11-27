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
  const [mostrarCarrito, setMostrarCarrito] = useState(false);

  // Funcion para abrir el carrito
  const abrirCarrito = () => {
    setMostrarCarrito(true);
  };

  // Muestra el boton del carrito si el ususario esta logueado
  const btnCarrito = userActive ? (
    <button id="btnCarrito" onClick={abrirCarrito}>
      <i class="fa-solid fa-cart-shopping"></i>
    </button>
  ) : null;

  // Muestra el carrito si el state mostrarCarrito es true
  const listaCarrito = mostrarCarrito ? (
    <ListaCarrito setMostrarCarrito={setMostrarCarrito}></ListaCarrito>
  ) : null;

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
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
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
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-center align-items-center"
        >
          <Nav className="nav d-flex px-5 align-items-center">
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

              {userActive ? (
                <Link
                  variant="none"
                  as="button"
                  onClick={() => cerrarSesion()}
                  className="nav-item nav-link d-flex"
                >
                  LogOut
                </Link>
              ) : (
                <NavLink end to="/login" className="nav-item nav-link d-flex">
                  Login
                </NavLink>
              )}
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
      {btnCarrito}
      {listaCarrito}
    </Navbar>
  );
};
