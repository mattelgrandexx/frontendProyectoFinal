import { useState, useEffect } from "react";

import { Navigate, useNavigate, useParams } from "react-router-dom";
import { obtenerMenuApi } from "../helpers/queries";

const DetalleMenu = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState({});
  const navigate = useNavigate();


  
  useEffect(() => {
    obtenerMenuApi(id).then((respuesta) => {
      if (respuesta.status === 200) {
        console.log(respuesta);
        //cargar los datos
        setProducto(respuesta);
      }
    });
  }, []);

  

  const onNavigateBack = () => {
    navigate(-1);
  }


  if ( !producto ) {
    return <Navigate to="/" />
  }
  

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          src={`/assets/heroes/${id}.jpg`}
          alt={producto.superhero}
          className="img-thumbnail animate__animated animate__fadeInLeft"
        />
      </div>

      <div className="col-8">
        <h3>{producto.nombreMenu}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            {" "}
            <b>Alter ego:</b> {producto.pan}{" "}
          </li>
          <li className="list-group-item">
            {" "}
            <b>Publisher:</b> {producto.descripcion}{" "}
          </li>
        </ul>

        <h5 className="mt-3"> Precio: </h5>
        <p>${producto.precioMenu}</p>

        <button className="btn btn-outline-primary" onClick={onNavigateBack}>
          Regresar
        </button>
      </div>
    </div>
  );
};

export default DetalleMenu;
