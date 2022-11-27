import { useEffect, useState } from "react";
import ItemCarrito from "./ItemCarrito";
import { crearPedidoApi } from "../../helpers/queries";
import Swal from "sweetalert2";

const ListaCarrito = ({ setMostrarCarrito }) => {
  let storageUser = JSON.parse(localStorage.getItem("usuarioActivo"));
  let listaCarrito = JSON.parse(localStorage.getItem("listaCarrito"));
  let [precioTotal, setPrecioTotal] = useState(0);
  let [pedido, setPedido] = useState({});

  // Establece el state setPedido con los datos para subir el pedido a la BD y establece el precio total del carrito
  useEffect(() => {
    setPedido({ nombreUsuario: storageUser, pedido: listaCarrito });
    listaCarrito.forEach((menu) => {
      setPrecioTotal(
        (precioTotal += parseInt(menu.precioMenu * menu.cantidad))
      );
    });
  }, []);

  // Funcion para cerrar el carrito
  const cerrarCarrito = () => {
    setMostrarCarrito(false);
  };

  // Funcion para agregar pedido a la base de dato
  const agregarPedido = () => {
    Swal.fire({
      title: "¿No te falta nada?",
      text: "¡Gracias por tu compra!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#c0050b",
      cancelButtonColor: "#000",
      cancelButtonTextColor: '#fafafa',
      confirmButtonText: "Si, enviar!",
    }).then((result) => {
      if (result.isConfirmed) {
        crearPedidoApi(pedido).then((respuesta) => {
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
      }
    });
  };

  return (
    <section id="listaCarrito">
      <button className="listaCarrito__cerrar" onClick={cerrarCarrito}>
        <i className="fa-solid fa-right-from-bracket "></i>
      </button>
      <h3 className="cardMenu__nombre text-center mt-2">Mis pedidos</h3>
      <div className="listaCarrito__items">
        {listaCarrito.map((menu) => (
          <ItemCarrito
            key={menu.id}
            id={menu.id}
            nombre={menu.nombreMenu}
            precio={menu.precioMenu}
            imagen={menu.imagen}
            precioTotal={precioTotal}
            setPrecioTotal={setPrecioTotal}
            listaCarrito={listaCarrito}
          ></ItemCarrito>
        ))}
      </div>
      <div className="text-end mb-5">
        <p className="fs-2 fw-bolder mt-4">Precio total: ${precioTotal}</p>
        <button className="listaCarrito__btn" onClick={agregarPedido}>
          Enviar pedido
        </button>
      </div>
    </section>
  );
};

export default ListaCarrito;
