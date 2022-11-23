import React from "react";
import { NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="p-5 bg-footer">
      <div className="row">
        <div className="col-12 col-lg-12 d-flex justify-content-center">
          <NavLink to={'/'}>
            <img
              src="https://i.postimg.cc/gkX2vdLL/LENOLOGO4.png"
              className="logoLeno"
              alt="logoNegro"
            />
          </NavLink>
        </div>
        <div className="mt-4">
          <h6 className="text-center text-footer">☎️ <strong>VIRGEN DE LA MERCED 885: </strong> 3815695788-3812365094-3815970694</h6>
          <h6 className="text-center text-footer">☎️ <strong>ACONQUIJA 1219: </strong> 3814480036-381 3816309296</h6>
          <h6 className="text-center text-footer">☎️ <strong>AV CONST.2400 (Tafi Viejo): </strong> 3815498608</h6>
        </div>
        <h5 className="mt-2 text-footer text-center">Nuestras redes:</h5>
        <div className="social-links justify-content-center d-flex">
           <a href="https://www.instagram.com/lenoargentina/" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
           <a href="https://www.facebook.com/ExperienciaLeno" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f"></i></a>
           <a href="https://twitter.com/LenoArgentina" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a>
          </div>
      </div>
    </footer>
  );
};
