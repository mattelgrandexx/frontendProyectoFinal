import { useState, useEffect } from "react";

import { Navigate, useNavigate, useParams } from "react-router-dom";
import { obtenerMenuApi } from "../helpers/queries";

const DetalleMenu = () => {
  const { id } = useParams();
  const [menu, setMenu] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    obtenerMenuApi(id).then((respuesta) => {
      if (respuesta.status === 200) {
        console.log(respuesta);
        //cargar los datos
        setMenu(respuesta.dato);
      }
    });
  }, []);

  

  const onNavigateBack = () => {
    navigate(-1);
  }


  if ( !menu) {
    return <Navigate to="/" />
  }
  

  return (
    <div className="row mt-5 container my-5">
      <div className="col-4">
        <img
          src={menu.imagen}
          alt={menu.nombreMenu}
          className="img-thumbnail animate__animated animate__fadeInLeft"
        />
      </div>

      <div className="col-8">
        <h3><strong>{menu.nombreMenu}</strong></h3>
        <ul className="list-group list-group-flush">
          {/* <li className="list-group-item">
            {" "}
            <b>Pan:</b> {menu.pan}{" "}
          </li> */}
          <li className="list-group-item">
            {" "}
            <b>Ingredientes:</b> {menu.descripcion}{" "}
          </li>
        </ul>

        <h5 className="mt-3"> Precio: </h5>
        <p>${menu.precioMenu}</p>

        <button className="btn btn-outline-primary my-4" onClick={onNavigateBack}>
          Regresar
        </button>
      </div>
    </div>
  );
};

export default DetalleMenu;
