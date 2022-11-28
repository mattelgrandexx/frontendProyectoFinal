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
  };

  if (!menu) {
    return <Navigate to="/" />;
  }

  return (
    <div className="row container py-5">
      <div className="col-12 col-md-6 col-lg-4 my-2">
        <img
          src={menu.imagen}
          alt={menu.nombreMenu}
          className="w-100 img-thumbnail animate__animated animate__fadeInLeft bg-crema"
        />
      </div>

      <div className="col-12 col-md-6 col-lg-8 ">
        <h3 className="detalle__titulo">
          <strong>{menu.nombreMenu}</strong>
        </h3>
        <div className="px-3">

        <p className="fs-4"><b>Ingredientes: </b>{menu.descripcion}</p>
        <h3 className="mt-3"> Precio: </h3>
        <p>${menu.precioMenu}</p>
        <button
          className="detalle__btn"
          onClick={onNavigateBack}
          >
          Regresar
        </button>
          </div>
      </div>
    </div>
  );
};

export default DetalleMenu;
