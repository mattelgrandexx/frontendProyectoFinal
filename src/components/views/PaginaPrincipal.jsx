import React, { useEffect, useState } from "react";
import { Button, Container, Form, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { consultarAPI } from "../helpers/queries";
import CardMenu from "./menus/CardMenu";

const PaginaPrincipal = () => {
  let storageUser = JSON.parse(localStorage.getItem("usuarioNoAdmin")) || [];
  let listaCarritoLS = JSON.parse(localStorage.getItem("listaCarrito")) || [];
  let popUpMostrado = JSON.parse(sessionStorage.getItem("popUpMostrado")) || [];
  const [userActive, setUserActive] = useState(false);
  let [menus, setMenus] = useState([]);
  let [hamburguesas, setHamburgesas] = useState([]);
  let [extras, setExtras] = useState([]);
  let [bebidas, setBebidas] = useState([]);
  let [mostrarPopUp, setMostrarPopUp] = useState(false);
  let [listaCarrito, setListaCarrito] = useState(listaCarritoLS);

  useEffect(() => {
    // Comprueba que haya un usuario logueado
    if (storageUser.length !== 0) {
      setUserActive(true);
    } else {
      setUserActive(false);
    }

    // Maqueta los menus cuando carga la pagina
    consultarAPI().then(
      (respuesta) => {
        setMenus(respuesta);
      },
      (reason) => {
        console.log(reason);

        Swal.fire(
          "Ocurrio un error",
          "Intentelo nuevamente en unos minutos",
          "error"
        );
      }
    );

    // Establece el tiempo que transcurrira hasta que se establezca mostrarPopUp en true y se abra el popUp
    if (popUpMostrado == !true) {
      setTimeout(() => {
        sessionStorage.setItem("popUpMostrado", JSON.stringify(true));
        setMostrarPopUp(true);
      }, 5000);
    }
  }, []);

  // Filtra los menus traidos de la BD y los asigna a sus categorias correspondientes
  useEffect(() => {
    setHamburgesas(
      menus.filter((menu) => menu.categoria === "hamburguesas") || []
    );
    setExtras(menus.filter((menu) => menu.categoria === "extras") || []);
    setBebidas(menus.filter((menu) => menu.categoria === "bebidas") || []);
  }, [menus]);

  // Actualiza el localStorage cada vez que se modifica el state listaCarrito
  useEffect(() => {
    localStorage.setItem("listaCarrito", JSON.stringify(listaCarrito));
  }, [listaCarrito]);

  // Funcion para cerrar el popUp
  const cerrarPopUp = () => {
    setMostrarPopUp(false);
  };

  // Condicional que muestra el popUp una vez que mostrarPopUp sea true
  const popUp = mostrarPopUp ? (
    <section id="popUp">
      <i
        className="fa-solid fa-xmark"
        id="popUp__cerrar"
        onClick={cerrarPopUp}
      ></i>
      <div className="d-flex">
        <img
          src="https://i.postimg.cc/0ySrqx81/bandera-transparente.png"
          className="w-100"
          alt=""
        />
        <img
          src="https://i.postimg.cc/0ySrqx81/bandera-transparente.png"
          className="w-100"
          alt=""
        />
      </div>
      <div className="px-2 py-2 text-center">
        <div className="popUp__img mx-auto">
          <img
            src="https://i.postimg.cc/FFnKd1zQ/LENOLOGO3.png"
            className="w-100"
            alt=""
          />
        </div>
        <h4 className="fw-bolder">¡Suscríbete a nuestro newsletter!</h4>
        <p className="mb-1 mb-lg-2">
          Registrate y enterate de todas nuestras novedades y promociones
        </p>
        <div className="w-75 mx-auto">
          <Form>
            <FormControl
              id="popUp__input"
              type="text"
              placeholder="Ingresa tu email"
            ></FormControl>
          </Form>
          <Link to={`/error`} className="btn cardMenu__btn m-0 mt-3" type="button">
            Suscribirse ahora
          </Link>
        </div>
      </div>
    </section>
  ) : null;

  return (
    <main>
      <section>
        <div>
          <img
            id="bannerImg"
            src="https://i.postimg.cc/tyhjxBV0/photo-1617086903031-8dbff0098f7a.png"
            alt=""
          />
        </div>
      </section>
      <Container>
        <h2 className="pagPrincipal__titulo">Hamburguesas</h2>
        <section className="p-0 cardContainer">
          {hamburguesas.map((menu) => (
            <CardMenu
              key={menu._id}
              menu={menu}
              listaCarrito={listaCarrito}
              setListaCarrito={setListaCarrito}
              userActive={userActive}
            ></CardMenu>
          ))}
        </section>

        <h2 className="pagPrincipal__titulo">Extras</h2>
        <section className="p-0 cardContainer">
          {extras.map((menu) => (
            <CardMenu
              key={menu._id}
              menu={menu}
              listaCarrito={listaCarrito}
              setListaCarrito={setListaCarrito}
              userActive={userActive}
            ></CardMenu>
          ))}
        </section>
        <h2 className="pagPrincipal__titulo">Bebidas</h2>
        <section className="p-0 cardContainer mb-0 pb-5">
          {bebidas.map((menu) => (
            <CardMenu
              key={menu._id}
              menu={menu}
              listaCarrito={listaCarrito}
              setListaCarrito={setListaCarrito}
              userActive={userActive}
            ></CardMenu>
          ))}
        </section>
      </Container>
      {popUp}
    </main>
  );
};

export default PaginaPrincipal;
