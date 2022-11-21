import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { consultarPedidosApi, crearPedidoApi, editarPedidoApi } from "../../helpers/queries";

const CardMenu = ({ menu, pedido, setPedido }) => {
  const { nombreMenu, precioMenu, descripcion, imagen, id } = {
    ...menu,
  };
  const [producto, setProducto] = useState({});
  const [pedidoCreado, setPedidoCreado] = useState(false);
  const [pedidoAgregado, setPedidoAgregado] = useState({});

  useEffect(() => {
    //Este state tiene el valor del unico arreglo de pedidos que se encuetra dentro del array de pedidos en la BD y es usado para agregar un producto al pedido que ya existe
    setPedidoAgregado(pedido[0])

    //Comprueba si hay algun pedido creado en la BD y da valor al state pedidoCreado de acuerdo a eso
    if (Object.keys(pedido).length === 0) {
      setPedidoCreado(false)
    } else {
      setPedidoCreado(true)
    }

    // Si el pedido no fue creado define como producto con las propiedades necesarias para crear un pedido, en cambio si ya fue creado lo defino con las propiedades necesarias para agregar el producto al pedido existente 
    if (!pedidoCreado) {
      setProducto({
        estado: "En preparacion",
        pedido: [{ nombreMenu: nombreMenu, precioMenu: precioMenu }],
      });
    } else {
      setProducto({ nombreMenu: nombreMenu, precioMenu: precioMenu });
    }
  }, [pedido]);


  const agregarPedido = () => {
    //Crea el pedido en el caso de que todavia no exista y cambia el staet de pedidoCreado a true
    if(!pedidoCreado) {
      crearPedidoApi(producto).then((respuesta) => {
       
        setPedidoCreado(true);

        if (respuesta.status === 201) {
          Swal.fire(
            "Producto agregado",
            "El producto se agrego a su lista de pedidos",
            "success"
            );
          } else {
            Swal.fire("Ocurrio un error", "El pedido no pudo ser creado", "error");
          }
        });
        // Luego de crear el pedido se hace una consulta a la BD para guardar el mismo dentro del state pedido
        consultarPedidosApi().then(
          (respuesta) => {
            setPedido(respuesta);
          },
          (reason) => {
            console.log(reason);
            Swal.fire(
              "Ocurrio un error",
              "Intentelo nuevamente en unos minutos",
              "errorr"
            );
          }
        )
      } else {
        //Agrega el producto al pedido en caso de que el pedido ya exista   
        editarPedidoApi(pedidoAgregado.id, pedidoAgregado).then((respuesta)=> {
          if(respuesta.status===200) {
            Swal.fire('Pruducto editado', 'El producto fue actualizado correctamente', 'success')
          } else{
            Swal.fire(
              "Ocurrio un error",
              "Intentelo nuevamente en unos minutos",
              "errorr"
            );
          }
        })





      }
      }
  

  return (
    <article className="cardMenu rounded rounded-3">
      <Link
        className="cardMenu__nombre pb-2 m-1 text-center"
        to={`../DetalleMenu/${id}`}
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