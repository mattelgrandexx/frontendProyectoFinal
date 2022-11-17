import { consultarUserAPI } from "../../helpers/queries";
import { Link } from "react-router-dom";

const ItemUsuario = ({usuario, setUsuarios}) => {
    const {nombreUsuario, email, id} = {...usuario}
    return (
        <tr>
          <td>{id}</td>
        <td>{nombreUsuario}</td>
        <td>{email}</td>
        <td>
          <button className='boton'>
            Borrar
          </button>
        </td>
      </tr>
    );
};

export default ItemUsuario;