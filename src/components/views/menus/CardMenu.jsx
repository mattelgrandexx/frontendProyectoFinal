import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CardMenu = ({ menu, listaCarrito, setListaCarrito, userActive }) => {
  const { nombreMenu, precioMenu, imagen, id } = {
    ...menu,
  };
  const [menuCarrito, setMenuCarrito] = useState({});
  const [menuAgregado, setMenuAgregado] = useState(false);

 

  // Primero comprueba que el state menuCarrito no este vacio y  luego actualiza listaCarrito con el menu nuevo
  useEffect(() => {
    if (Object.keys(menuCarrito).length !== 0) {
      setListaCarrito((listaCarrito) => [...listaCarrito, menuCarrito]);
    }
  }, [menuCarrito]);

  // Comprueba cuando cambia listaCarrito que menus estan agregados al localStorage y les cambia el boton de agregar a mis pedidos por pedido agregados para evitar que sigan presionando dicho boton
  useEffect(() => {
    if (
      listaCarrito.find((item) => item.nombreMenu === nombreMenu) === undefined
    ) {
      setMenuAgregado(false);
    } else {
      setMenuAgregado(true);
    }
  }, [listaCarrito]);
  

  // Funcion para agregar un menu al localStorage
  const agregarPedido = () => {
    //Comprobar que haya un ususario logueado
    if (userActive) {
      // cambia el boton de agregar a mis pedidos por pedido agregados para evitar que sigan presionando dicho boton
      setMenuAgregado(true);
      //Agrega al state menuCarrito los datos del menu para agregar al loclaStorage
      let lista2 = JSON.parse(localStorage.getItem("listaCarrito")) || [];
      setListaCarrito(lista2)
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

  // Determina si se muestra el boton de agregar al pedido o menu agregado
  const btn = !menuAgregado ? (
    <Button className="cardMenu__btn" type="button" onClick={agregarPedido}>
      Agregar al pedido
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
