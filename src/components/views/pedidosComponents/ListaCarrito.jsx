import { useEffect, useState } from "react";
import ItemCarrito from "./ItemCarrito";
import { crearPedidoApi } from "../../helpers/queries";
import Swal from "sweetalert2";
import Offcanvas from "react-bootstrap/Offcanvas";

const ListaCarrito = () => {
  const [show, setShow] = useState(false);
  let storageUser = JSON.parse(localStorage.getItem("usuarioActivo"))||[];
  const [userActive, setUserActive] = useState(false);
  let listaCarrito = JSON.parse(localStorage.getItem("listaCarrito"))||[];
  let [precioTotal, setPrecioTotal] = useState(0);
  let [pedido, setPedido] = useState({});
  let [carritoAbierto, setCarritoAbierto] = useState(false);
  let [carritoCerrado, setCarritoCerrado] = useState(false);

  // Comprueba que haya un usuario conectado
  useEffect(() => {
    if (storageUser.length!==0) {
      setUserActive(true);
    }
  }, [setUserActive, storageUser]);

  // Funcion para cerrar el carrito y 
  const cerrarCarrito = () => {
    setCarritoCerrado(!carritoCerrado)
    setShow(false);
  }
  // Funcion para abrir el carrito
  const abrirCarrito = () => {
    setCarritoAbierto(!carritoAbierto);
    setShow(true);
  } 
  
  // Si hay un usuario conectado se muestra el btn del carrito
  const btnCarrito = userActive ? (
    <button id="btnCarrito" onClick={abrirCarrito}>
      <i className="fa-solid fa-cart-shopping"></i>
    </button>
  ) : null;

  // Elimina la propiedad imagen de la lsita del carrito, establece el state setPedido con los datos para subir el pedido a la BD y establece el precio total del carrito
  useEffect(() => {
    listaCarrito.forEach(menu => {
      delete menu.imagen;
    });
    setPedido({ nombreUsuario: storageUser, pedido: listaCarrito });
  }, [precioTotal, carritoAbierto]);

  // Establece el precio total del pedido cada vez que se abre el carrito
  useEffect(() => {
    listaCarrito = JSON.parse(localStorage.getItem("listaCarrito"))||[];
    listaCarrito.forEach((menu) => {
      setPrecioTotal(
        (precioTotal += parseInt(menu.precioMenu * menu.cantidad))
      );
    });
  }, [carritoAbierto])
  
  // Reinicia el precio total del pedido cada vez que se cierra el carrito
  useEffect(() => {
    listaCarrito = JSON.parse(localStorage.getItem("listaCarrito"))||[];
    listaCarrito.forEach((menu) => {
      setPrecioTotal(0);
    });
  }, [carritoCerrado])

  // Funcion para agregar pedido a la base de dato
  const agregarPedido = () => {
    console.log(pedido);
    Swal.fire({
      title: "¿No te falta nada?",
      text: "¡Gracias por tu compra!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#c0050b",
      cancelButtonColor: "#000",
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
            // localStorage.setItem("listaCarrito", [])
          } else {
            Swal.fire(
              "Ocurrio un error",
              "El pedido no pudo ser creado",
              "error"
            );
            console.log()
          }
        });
      }
    });
  };

  return (
    <>
      {btnCarrito}
      <Offcanvas show={show} onHide={cerrarCarrito} placement={"end"} className="px-0" id="listaCarrito">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="cardMenu__nombre text-center  mt-2 w-75">
            Mis pedidos
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="overflow-hidden">
          <div className="listaCarrito__items">
            {listaCarrito.map((menu, posicion) => (
              <ItemCarrito
                key={posicion}
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
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default ListaCarrito;
