import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CardMenu = ({ menu, listaCarrito, setListaCarrito, userActive }) => {
  const { nombreMenu, precioMenu, imagen, _id, categoria } = {
    ...menu,
  };
  const [menuCarrito, setMenuCarrito] = useState({});
  const [masUno, setMasUno] = useState(false);

  // Muestra un +1 en el boton de agregar a mi pedido cada vez que se lo presiona
  const prodAgregado = masUno ? <span className="fw-bold">+1</span> : null;

  // Cambia la imagen si es que pertenecen a la categoria de bebidas
  const img =
    categoria === "bebidas" ? (
      <div className="cardMenu__imgContainer bebidas mx-auto">
        <img className="w-100 cardMenu__img" src={imagen} alt={nombreMenu} />
      </div>
    ) : (
      <div className="cardMenu__imgContainer">
        <img className="w-100 cardMenu__img" src={imagen} alt={nombreMenu} />
      </div>
    );

  // Primero comprueba que el state menuCarrito no este vacio y  luego actualiza listaCarrito con el menu nuevo
  useEffect(() => {
    if (
      Object.keys(menuCarrito).length !== 0 &&
      listaCarrito.find((item) => item.nombreMenu === nombreMenu) === undefined
    ) {
      setListaCarrito((listaCarrito) => [...listaCarrito, menuCarrito]);

      // Si el menu ya se encuentra en la lista del carrito, este aumenta su cantidad en uno
    } else if (listaCarrito.find((item) => item.nombreMenu === nombreMenu)) {
      let itemParaAumentar = listaCarrito.findIndex(
        (item) => item.nombreMenu === nombreMenu
      );
      listaCarrito[itemParaAumentar].cantidad += 1;
    }
  }, [menuCarrito]);

  // Funcion para agregar un menu al localStorage
  const agregarPedido = () => {
    //Comprobar que haya un ususario logueado
    if (userActive) {
      //Agrega al state menuCarrito los datos del menu para agregar al loclaStorage
      let lista2 = JSON.parse(localStorage.getItem("listaCarrito")) || [];
      setListaCarrito(lista2);
      setMenuCarrito({
        nombreMenu: nombreMenu,
        precioMenu: precioMenu,
        imagen: imagen,
        cantidad: 1,
      });

      // Establece como true el state masUno para mostrar el +1 en el btn y establece un timer para que luego de 1 segundo desaparezca
      setMasUno(true);
      setTimeout(() => {
        setMasUno(false);
      }, 1000);
    } else {
      Swal.fire(
        "Inicia sesion",
        "Para agregar un pedido primero debes iniciar sesion",
        "error"
      );
    }
  };

  return (
    <article className="cardMenu rounded rounded-3">
      <Link
        className="cardMenu__nombre pb-2 m-1 text-center"
        to={`/detalle/${_id}`}
      >
        {nombreMenu}
      </Link>
      <div className="cardMenu__descContainer">
        <div className="cardMenu__desc">
          <p className="cardMenu__precio m-0">${precioMenu}</p>
          <Button
            className="cardMenu__btn"
            type="button"
            onClick={agregarPedido}
          >
            Agregar al pedido {prodAgregado}
          </Button>
        </div>
        {img}
      </div>
    </article>
  );
};

export default CardMenu;
