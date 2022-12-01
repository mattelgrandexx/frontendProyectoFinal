import React from "react";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <>
    <section className="fondoError">

      <section className="fondoError d-flex justify-content-center">
        <div className="text-center errorImagen divErrorImagen">
          <img
            src="https://img.freepik.com/vector-gratis/ups-error-404-ilustracion-concepto-robot-roto_114360-5529.jpg?w=2000"
            className="w-100"
            alt="error404"
            />
        </div>
      </section>
      <section>
        <div className="fondoError text-center">
          <h2 className="oswald400">No encontramos lo que estabas buscando, puedes regresar al inicio en el boton de abajo</h2>
        </div>
        <div className="d-flex justify-content-center fondoError mb-2">
          <Link
            to={"/"}
            className="boton botonRegresarError oswald400 text-center"
            >
            REGRESAR
          </Link>
        </div>
      </section>
            </section>
    </>
  );
};

export default Error404;
