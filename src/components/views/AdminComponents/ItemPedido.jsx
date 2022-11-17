import { Link } from "react-router-dom";

const ItemPedido = ({pedido, setPedidos}) => {
    const {estado, nombrePedido, id} = {...pedido}
    return (
        <tr>
        <td>{id}</td>
      <td>{nombrePedido}</td>
      <td>{estado}</td>
      <td>
        <Link className="boton" to={`/administrar/editarUsuario/${id}`}>
          Editar
        </Link>
        <button className='boton'>
          Borrar
        </button>
      </td>
    </tr>
    );
};

export default ItemPedido;