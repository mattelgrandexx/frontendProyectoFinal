import { borrarUsuarioAPI, consultarUserAPI } from "../../helpers/queries";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ItemUsuario = ({usuario, setUsuarios}) => {
    const {nombreUsuario, email, id} = {...usuario}

    const borrarUsuario = ()=>{
      borrarUsuarioAPI(id).then((respuesta)=>{ 
        if(respuesta.status === 200){   
          Swal.fire("Usuario eliminado","El usuario fue eliminado exitosamente","success");
          consultarUserAPI().then((respuesta)=>{
            setUsuarios(respuesta);
          })
        }else{
          Swal.fire("Ocurrio un error","Vuelva a intentar esta operación en unos minutos","error");
        }
      })
    }
    return (
        <tr>
          <td>{id}</td>
        <td>{nombreUsuario}</td>
        <td>{email}</td>
        <td>
        <button className='botonBorrar' onClick={borrarUsuario}>
          Borrar
        </button>
        </td>
      </tr>
    );
};

export default ItemUsuario;