import React, { useEffect, useState } from "react";

const ItemCarrito = ({
  nombre,
  precio,
  imagen,
  id,
  precioTotal,
  setPrecioTotal,
  listaCarrito,
}) => {
  let menuCantidad = listaCarrito.findIndex((x) => x.nombreMenu === nombre);
  let [precioMenu, setPrecioMenu] = useState(parseInt(precio));
  let [cantidad, setCantidad] = useState(listaCarrito[menuCantidad].cantidad);

  //Actualiza el precio de cada menu en el carrito cada vez que se modifica la cantidad
  useEffect(() => {
    setPrecioMenu(precio * cantidad);
  }, [cantidad]);

  // Funcion para restar la cantidad de un menu del carrito
  const restarCantidad = () => {
    if (cantidad > 1) {
      setCantidad((listaCarrito[menuCantidad].cantidad -= 1));
      localStorage.setItem("listaCarrito", JSON.stringify(listaCarrito));
      setPrecioTotal((precioTotal -= parseInt(precio)));
    }
  };

  // Funcion para aumentar la cantidad de un menu del carrito
  const aumentarCantidad = () => {
    setCantidad((listaCarrito[menuCantidad].cantidad += 1));
    localStorage.setItem("listaCarrito", JSON.stringify(listaCarrito));
    setPrecioTotal((precioTotal += parseInt(precio)));
  };

  // Funcion para borrar un menu del carrito y actualizar el precio total
  const borrarPedido = () => {
    setPrecioTotal(precioTotal - precioMenu);
    let lista2 = listaCarrito.filter((item) => item.id !== id);
    localStorage.setItem("listaCarrito", JSON.stringify(lista2));
  };

  return (
    <article className="d-flex mt-4 itemCarrito">
      <div className="me-2">
        <img className="w-100" src={imagen} alt={nombre} />
      </div>
      <div className="w-75 mt-3">
        <h5 className="h3 fw-bolder mb-0">{nombre}</h5>
        <div className="d-flex mt-3 mb-4">
          <button
            type="button"
            className="btnFlechaCarrito p-0 px-1 border-0"
            onClick={restarCantidad}
          >
            <i className="fa-solid fa-arrow-left"></i>
          </button>
          <p className="mb-0 mx-1 border border-1 px-3">{cantidad}</p>
          <button
            type="button"
            className="btnFlechaCarrito p-0 px-1 border-0"
            onClick={aumentarCantidad}
          >
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
        <p className="fs-3">{precioMenu}</p>
      </div>
      <div className="mt-3">
        <button
          type="button"
          className="btnEliminarCarrito ms-5"
          onClick={borrarPedido}
        >
          <i className="fa-regular fa-rectangle-xmark"></i>
        </button>
      </div>
    </article>
  );
};

export default ItemCarrito;
