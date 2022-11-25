import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import {
  crearPedidoApi,
  editarPedidoApi,
} from "../../helpers/queries";

const CardMenu = ({
  menu,
  pedido,
  usuarioLogueado,
  pedidoCreado,
  setPedidoCreado,
}) => {
  const { nombreMenu, precioMenu, descripcion, imagen, _id } = {
    ...menu,
  };
  const [producto, setProducto] = useState({});
  const [pedidoAgregado, setPedidoAgregado] = useState({});

  useEffect(() => {
    // Si el pedido no fue creado define como producto con las propiedades necesarias para crear un pedido, en cambio si ya fue creado lo defino con las propiedades necesarias para agregar el producto al pedido existente
    if (!pedidoCreado) {
      setProducto({
        nombreUsuario: usuarioLogueado.nombreUsuario,
        estado: "En preparacion",
        pedido: [{ nombreMenu: nombreMenu, precioMenu: precioMenu }],
      });
      console.log(pedido)
    } else {
      console.log(pedidoCreado)
      setProducto({ nombreMenu: nombreMenu, precioMenu: precioMenu });
      //Este state tiene el valor del unico arreglo de pedidos que se encuetra dentro del array de pedidos en la BD y es usado para agregar un producto al pedido que ya existe
      console.log(pedido)
      setPedidoAgregado(pedido);
    }
  }, [pedido]);

  const agregarPedido = () => {
    //Comprobar que haya un ususario logueado
    if (Object.keys(usuarioLogueado).length !== 0) {
      //Crea el pedido en el caso de que todavia no exista y cambia el staet de pedidoCreado a true
      if (!pedidoCreado) {        
        crearPedidoApi(producto).then((respuesta) => {
          if (respuesta.status === 201) {
            Swal.fire(
              "Producto agregado",
              "El producto se agrego a su lista de pedidos",
              "success"
            );
          } else {
            Swal.fire(
              "Ocurrio un error",
              "El pedido no pudo ser creado",
              "error"
            );
          }
        });
        setPedidoCreado(true);
        
      } else {
        //Agrega el producto al pedido en caso de que el pedido ya exista
        console.log(pedidoAgregado);
        pedidoAgregado.pedido.push(producto);
        editarPedidoApi(pedidoAgregado._id, pedidoAgregado).then((respuesta) => {
          if (respuesta.status === 200) {
            Swal.fire(
              "Producto agregado",
              "El producto se agrego a su lista de pedidos",
              "success"
            );
          } else {
            Swal.fire(
              "Ocurrio un error",
              "Intentelo nuevamente en unos minutos",
              "error"
            );
          }
        });
      }
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
        to={`../DetalleMenu/${_id}`}
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
            Agregar a mi pedido
          </Button>
        </div>
        <div className="cardMenu__imgContainer">
          <img className="w-100" src={imagen} alt={nombreMenu} />
        </div>
      </div>
    </article>
  );
};

export default CardMenu;
