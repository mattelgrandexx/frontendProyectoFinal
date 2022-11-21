import {
  borrarPedidoApi,
  consultarPedidosAPI,
} from "../../helpers/queries";
import Swal from "sweetalert2";
import { useState } from "react";

const ItemPedido = ({ pedido, setPedidos }) => {
  const { nombrePedido, id } = { ...pedido };
  const [estado, setEstado] = useState(false);

  const borrarPedido = () => {
    Swal.fire({
        title: 'Esta seguro?',
        text: "No podra revertir este cambio!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, eliminar!'
      }).then((result) => {
        if (result.isConfirmed) {
            borrarPedidoApi(id).then((respuesta) => {
              if (respuesta.status === 200) {
                Swal.fire(
                  "Pedido eliminado",
                  "El pedido fue eliminado exitosamente",
                  "success"
                );
                consultarPedidosAPI().then((respuesta) => {
                  setPedidos(respuesta);
                });
              } else {
                Swal.fire(
                  "Ocurrio un error",
                  "Vuelva a intentar esta operación en unos minutos",
                  "error"
                );
              }
            });
          
        }
      })
  };

  const cambiarInput = () => {
    setEstado(!estado);
  };

  return (
    <tr>
      <td>{id}</td>
      <td>{nombrePedido.map((item) => " - " + item + " ")}</td>
      <td>{estado ? "Listo" : "En preparacion"}</td>
      <td>
        <div className="d-flex divAltura">
          <div className="fondoNaranja text-center bordeCajaNegro d-flex tamañoDivEstado">
          <div className="d-flex">
          <p className="oswald textoBlanco">Cambiar estado</p>
          <label className="switch" onChange={cambiarInput}>
            <input type="checkbox" name="check" />
            <span className="slider"></span>
          </label>
        </div>
          </div>
        <button className="botonBorrarPedidos mx-2" onClick={borrarPedido}>
          Borrar
        </button>
        </div>
      </td>
    </tr>
  );
};

export default ItemPedido;
