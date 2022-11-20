import { Form, Link } from "react-router-dom";
import { borrarPedidoApi, consultarPedidosAPI, editarPedidoAPI } from "../../helpers/queries";
import Swal from "sweetalert2";
import { useState } from "react";

const ItemPedido = ({pedido, setPedidos}) => {
    const {nombrePedido, id} = {...pedido}

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

      const realizarPedido=()=>{
        editarPedidoAPI(id)
      }

      const [pedestado,setPedEstado] = useState(false)

       let estado = "";
      const input1=(e)=>{
        e.preventDefault()
        setPedEstado(true)
        if(pedestado){
          estado = "Realizado"
        }else{
          estado = "En preparacion"
        }

      }

    return (
        <tr>
        <td>{id}</td>
      <td>{
    nombrePedido.map( item => ( " - " +
      item + " "
    ))
  }</td>
      <td>{estado}</td>
      <td>
      <div>
            <input onChange={input1} name="input1" type="checkbox" id="switch"
                    class="checkbox" />
        <label for="switch" class="toggle">
          {/* {console.log(e.target.input1.value)} */}
             
 
<p>    </p>
 
 
        </label>
        </div>
        <button className='botonBorrar' onClick={borrarPedido}>
          Borrar
        </button>
      </td>
    </tr>
    );
};

export default ItemPedido;