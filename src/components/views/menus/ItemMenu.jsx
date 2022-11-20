import React from 'react'
import { consultarAPI, borrarMenuApi } from '../../helpers/queries';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const ItemMenu = ({menu, setMenus}) => {
  const {id, nombreMenu, precioMenu, descripcion, imagen, categoria} = {...menu}

  const borrarMenu = ()=>{
  borrarMenuApi(id).then((respuesta)=>{ 
    if(respuesta.status === 200){   
      Swal.fire("Producto eliminado","El producto fue eliminado exitosamente","success");
      consultarAPI().then((respuesta)=>{
        setMenus(respuesta);
      })
    }else{
      Swal.fire("Ocurrio un error","Vuelva a intentar esta operación en unos minutos","error");
    }
  })
}

  return (
    <tr>
      <td>{id}</td>
      <td>{nombreMenu}</td>
      <td>${precioMenu}</td>
      <td>{imagen}</td>
      <td>{categoria}</td>
      <td>{descripcion}</td>
      <td>
        <Link className="boton" to={`/administrar/editarMenu/${id}`}>
          Editar
        </Link>
        <button className='botonBorrar' onClick={borrarMenu}>
          Borrar
        </button>
      </td>
    </tr>
  );
}

export default ItemMenu