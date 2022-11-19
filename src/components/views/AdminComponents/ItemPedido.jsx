import { Form, Link } from "react-router-dom";
import { borrarPedidoApi, consultarPedidosAPI } from "../../helpers/queries";
import Swal from "sweetalert2";

const ItemPedido = ({pedido, setPedidos}) => {
    const {estado, nombrePedido, id} = {...pedido}

    const borrarPedido = ()=>{
        borrarPedidoApi(id).then((respuesta)=>{ 
          if(respuesta.status === 200){   
            Swal.fire("Pedido eliminado","El pedido fue eliminado exitosamente","success");
            consultarPedidosAPI().then((respuesta)=>{
              setPedidos(respuesta);
            })
          }else{
            Swal.fire("Ocurrio un error","Vuelva a intentar esta operación en unos minutos","error");
          }
        })
      }
    return (
        <tr>
        <td>{id}</td>
      <td>{nombrePedido}</td>
      <td>{estado}</td>
      <td>
       <Link className="boton" to={`/administrar/editarPedido/${id}`}>
          Cambiar estado
        </Link>
        <button className='botonBorrar' onClick={borrarPedido}>
          Anular pedido
        </button>
      </td>
    </tr>
    );
};

export default ItemPedido;