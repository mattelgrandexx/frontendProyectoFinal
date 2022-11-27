import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CardMenu = ({ menu, listaCarrito, setListaCarrito, storageUser }) => {
  const { nombreMenu, precioMenu, imagen, id } = {
    ...menu,
  };
  const [userActive, setUserActive] = useState(false);
  const [menuCarrito, setMenuCarrito] = useState({});
  const [menuAgregado, setMenuAgregado] = useState(false);

  // Comprueba que haya un usuario logueado
  useEffect(() => {
    if (storageUser) {
      setUserActive(true);
    } else {
      setUserActive(false);
    }
  }, []);

  // Primero comprueba que el state menuCarrito no este vacio, luego que en el state listaCarrito no se encuentre agregado el menu y si luego actualiza listaCarrito con el menu nuevo
  useEffect(() => {
    if (Object.keys(menuCarrito).length !== 0) {
      setListaCarrito((listaCarrito) => [...listaCarrito, menuCarrito]);
    }
  }, [menuCarrito]);

  // Comprueba cuando carga la pagina que menus estan agregados al localStorage y les cambia el boton de agregar a mis pedidos por pedido agregados para evitar que sigan presionando dicho boton
  useEffect(() => {
    if (
      listaCarrito.find((item) => item.nombreMenu === nombreMenu) === undefined
    ) {
      setMenuAgregado(false);
    } else {
      setMenuAgregado(true);
    }
  }, []);

  // Funcion para agregar un menu al localStorage
  const agregarPedido = () => {
    //Comprobar que haya un ususario logueado
    if (userActive) {
      // cambia el boton de agregar a mis pedidos por pedido agregados para evitar que sigan presionando dicho boton
      setMenuAgregado(true);
      //Agrega al state menuCarrito las propiedades del menu para agregar al loclaStorage
      setMenuCarrito({
        nombreMenu: nombreMenu,
        precioMenu: precioMenu,
        imagen: imagen,
        cantidad: 1,
        id: id,
      });
    } else {
      Swal.fire(
        "Inicia sesion",
        "Para agregar un pedido primero debes iniciar sesion",
        "error"
      );
    }
  };

  const btn = !menuAgregado ? (
    <Button className="cardMenu__btn" type="button" onClick={agregarPedido}>
      Agregar a mi pedido
    </Button>
  ) : (
    <Button className="cardMenu__btnAgregado" disabled>
      Menu agregado
    </Button>
  );

  return (
    <article className="cardMenu rounded rounded-3">
      <Link
        className="cardMenu__nombre pb-2 m-1 text-center"
        to={`/detalle/${id}`}
      >
        {nombreMenu}
      </Link>
      <div className="cardMenu__descContainer">
        <div className="cardMenu__desc">
          <p className="cardMenu__precio m-0">${precioMenu}</p>
          {btn}
        </div>
        <div className="cardMenu__imgContainer">
          <img className="w-100" src={imagen} alt={nombreMenu} />
        </div>
      </div>
    </article>
  );
};

export default CardMenu;
