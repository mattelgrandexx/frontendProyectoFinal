import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { consultarUserApi } from "../../helpers/queriesLogin";

const ItemUsuario = ({usuario, setUsuarios}) => {
    const {nombreUsuario, email, id} = {...usuario}

    const borrarUsuario = ()=>{
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
          borrarUsuarioAPI(id).then((respuesta)=>{ 
            if(respuesta.status === 200){   
              Swal.fire("Usuario eliminado","El usuario fue eliminado exitosamente","success");
              consultarUserApi().then((respuesta)=>{
                setUsuarios(respuesta);
              })
            }else{
              Swal.fire("Ocurrio un error","Vuelva a intentar esta operación en unos minutos","error");
            }
          })
           }
      })
    }
    return (
        <tr>
          <td>{id}</td>
        <td>{nombreUsuario}</td>
        <td>{email}</td>
        <td>
        <button className='botonBorrarUsuarios' onClick={borrarUsuario}>
          Borrar
        </button>
        </td>
      </tr>
    );
};

export default ItemUsuario;