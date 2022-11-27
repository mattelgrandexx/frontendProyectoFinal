import React, { useEffect, useState } from "react";
import { Button, Container, Form, FormControl } from "react-bootstrap";
import Swal from "sweetalert2";
import { consultarAPI } from "../helpers/queries";
import CardMenu from "./menus/CardMenu";

const PaginaPrincipal = () => {
  let storageUser = JSON.parse(localStorage.getItem("usuarioActivo")) || [];
  let listaCarritoLS = JSON.parse(localStorage.getItem("listaCarrito")) || [];
  let [menus, setMenus] = useState([]);
  let [hamburguesas, setHamburgesas] = useState([]);
  let [extras, setExtras] = useState([]);
  let [bebidas, setBebidas] = useState([]);
  let [mostrarPopUp, setMostrarPopUp] = useState(false);
  let [listaCarrito, setListaCarrito] = useState(listaCarritoLS);

  useEffect(() => {
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
    setTimeout(() => {
      setMostrarPopUp(true);
    }, 5000);
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
      <img
        src="https://i.postimg.cc/0ySrqx81/bandera-transparente.png"
        className="w-100"
        alt=""
      />
      <div className="px-2 py-2 text-center">
        <div>
          <img
            src="https://i.postimg.cc/FFnKd1zQ/LENOLOGO3.png"
            className="w-25"
            alt=""
          />
        </div>
        <h4 className="fw-bolder">¡Suscríbete a nuestro newsletter!</h4>
        <p className="mb-1 mb-lg-2">
          Registrate y enterate de todas nuestras novedades y promociones
        </p>
        <Form>
          <FormControl
            id="popUp__input"
            type="text"
            placeholder="Ingresa tu email"
          ></FormControl>
        </Form>
        <Button className="cardMenu__btn m-0 mt-3" type="button">
          Suscribirse ahora
        </Button>
      </div>
    </section>
  ) : null;

  return (
    <main>
      <section>
        <div>
          <img
            src="https://i.postimg.cc/BvGbSy6L/bandera.jpg"
            className="tamañoBandera"
            alt=""
          />
          <img
            src="https://i.postimg.cc/BvGbSy6L/bandera.jpg"
            className="tamañoBandera"
            alt=""
          />
          <img
            src="https://i.postimg.cc/BvGbSy6L/bandera.jpg"
            className="tamañoBandera"
            alt=""
          />
          <img
            src="https://i.postimg.cc/BvGbSy6L/bandera.jpg"
            className="tamañoBandera"
            alt=""
          />
        </div>
        <div>
          <img
            id="bannerImg"
            src="https://www.denirohamburgueseria.com.ar/img/fondo1920x1080.png"
            alt=""
          />
          <p id="bannerText">
            Viví la experiencia Leno, THE REAL AMERICAN FOOD IS HERE{" "}
          </p>
        </div>
      </section>
      <Container>
        <h2 className="pagPrincipal__titulo">Hamburguesas</h2>
        <section className="p-0 cardContainer">
          {hamburguesas.map((menu) => (
            <CardMenu
              key={menu.id}
              menu={menu}
              listaCarrito={listaCarrito}
              setListaCarrito={setListaCarrito}
              storageUser={storageUser}
            ></CardMenu>
          ))}
        </section>

        <h2 className="pagPrincipal__titulo">Extras</h2>
        <section className="p-0 cardContainer">
          {extras.map((menu) => (
            <CardMenu
              key={menu.id}
              menu={menu}
              listaCarrito={listaCarrito}
              setListaCarrito={setListaCarrito}
              storageUser={storageUser}
            ></CardMenu>
          ))}
        </section>

        <h2 className="pagPrincipal__titulo">Bebidas</h2>
        <section className="p-0 cardContainer">
          {bebidas.map((menu) => (
            <CardMenu
              key={menu.id}
              menu={menu}
              listaCarrito={listaCarrito}
              setListaCarrito={setListaCarrito}
              storageUser={storageUser}
            ></CardMenu>
          ))}
        </section>
      </Container>
      {popUp}
    </main>
  );
};

export default PaginaPrincipal;
