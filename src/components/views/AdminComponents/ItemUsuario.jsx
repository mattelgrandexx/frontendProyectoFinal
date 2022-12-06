const ItemUsuario = (props) => { 
    return (
        <tr>
          <td>{props._id}</td>
        <td>{props.nombreUsuario}</td>
        <td>{props.email}</td>
        <td>{props.estado}</td>
        <td>{props.permiso}</td>
        <td>
          <div className="d-flex justify-content-evenly">
        <button className='botonBorrarUsuarios' onClick={() => props.borrarUsuario(props._id)}>
          Borrar
        </button>
        {
          (props.permiso === "Suspendido") ? <button variant="warning" className='botonSuspenderUsuarios' onClick={() => props.darPermisosUser(props._id)}>
          Dar permisos
        </button> : <button variant="warning" className='botonSuspenderUsuarios' onClick={() => props.suspenderUsuario(props._id)}>
          Suspender
        </button>
        }
        </div>
        </td>
      </tr>
    );
};

export default ItemUsuario;