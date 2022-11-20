
import {
  borrarPedidoApi,
  consultarPedidosAPI,
  editarPedidoAPI,
} from "../../helpers/queries";
import Swal from "sweetalert2";
import { useState } from "react";


const ItemPedido = ({ pedido, setPedidos }) => {
  const { nombrePedido, id } = { ...pedido };
  const [estado, setEstado] = useState(false);



  const borrarPedido = () => {
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
  };

  const realizarPedido = () => {
    editarPedidoAPI(id);
  };

  const cambiarInput = (e) => {
      e.preventDefault();
      
      setEstado(!estado);

  };



  return (
    <tr>
      <td>{id}</td>
      <td>{nombrePedido.map((item) => " - " + item + " ")}</td>
      <td>{(estado)?'En preparacion' : 'Listo'}</td>
      <td>
       <div>
       <label className="switch">
          <input type="checkbox" name="check"/>
          <span className="slider"></span>
        </label>

       </div>
        
       
     
        <button className="botonBorrar" onClick={borrarPedido}>
          Borrar
        </button>
      </td>
    </tr>
  );
};

export default ItemPedido;
