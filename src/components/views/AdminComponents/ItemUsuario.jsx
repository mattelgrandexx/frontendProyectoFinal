import { useState } from "react";
import Swal from "sweetalert2";
import { borrarUsuarioAPI, consultarUserApi, obtenerYDarPermisosUser, obtenerYSuspenderUsuario } from "../../helpers/queriesLogin";

const ItemUsuario = ({usuario, setUsuarios}) => {
    const {nombreUsuario, email, _id, permiso, estado} = {...usuario}
    
    const [permisos, setPermisos] = useState(false)


    const borrarUsuario = (id)=>{
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
              consultarUserApi().then((users)=>{
                setUsuarios(users);
              })
            }else{
              Swal.fire("Ocurrio un error","Vuelva a intentar esta operación en unos minutos","error");
            }
          })
           }
      })
    }

    const suspenderUsuario = (id)=>{
      Swal.fire({
        title: 'Esta seguro?',
        text: "Le prohibiras el login al usuario..!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#000',
        confirmButtonText: 'Suspender'
      }).then((result) => {
        if (result.isConfirmed) {
          setPermisos(true)
          obtenerYSuspenderUsuario(id).then((respuesta)=>{ 
            console.log(respuesta)
            if(respuesta.status === 200){   
              Swal.fire("Usuario suspendido","El usuario fue suspendido exitosamente","success");
              consultarUserApi().then((users)=>{
                console.log(users)
                setUsuarios(users);
              })
            } else{
              Swal.fire("Ocurrio un error","Vuelva a intentar esta operación en unos minutos","error");
            }
          })
           }
      })
    }
    const darPermisosUser = (id)=>{
      Swal.fire({
        title: 'Esta seguro?',
        text: "Le daras permisos nuevamente al usuario...",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#000',
        confirmButtonText: 'Permitir'
      }).then((result) => {
        if (result.isConfirmed) {
        setPermisos(false)
          obtenerYDarPermisosUser(id).then((respuesta)=>{ 
            console.log(respuesta)
            if(respuesta.status === 200){   
              Swal.fire("Usuario con permisos nuevamente","Le dimos permisos al usuario para poder acceder","success");
              consultarUserApi().then((users)=>{
                setUsuarios(users);
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
          <td>{_id}</td>
        <td>{nombreUsuario}</td>
        <td>{email}</td>
        <td>{estado}</td>
        <td>{permiso}</td>
        <td>
          <div className="d-flex justify-content-evenly">
        <button className='botonBorrarUsuarios' onClick={() => borrarUsuario(_id)}>
          Borrar
        </button>
        {
          (permiso === "Suspendido") ? <button variant="warning" className='botonSuspenderUsuarios' onClick={() => darPermisosUser(_id)}>
          Dar permisos
        </button> : <button variant="warning" className='botonSuspenderUsuarios' onClick={() => suspenderUsuario(_id)}>
          Suspender
        </button>
        }
        </div>
        </td>
      </tr>
    );
};

export default ItemUsuario;