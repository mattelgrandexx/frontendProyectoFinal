import React from "react";

const AcercaDeNos = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center">LENO ARGENTINA</h1>
      <div className="d-flex justify-content-center my-4">
          <img src="https://pbs.twimg.com/media/Fb7PnO2XgAUWyXS?format=jpg&name=medium" className="card-leno " alt="logoleno" />
          <img src="https://pbs.twimg.com/media/Fb7PnO0WAAI-cc9?format=jpg&name=large" alt="" className="card-leno"/>
      </div>
      <h3 className="text-center">
        Somos una hamburgueseria de tucuman caraterizada por las smashed burgers,
        Empezamos en 2019 como un local comun y corriente y luego se volvio una completa locura...
        
      </h3>
      <hr />
      <h4><strong className="text-center d-flex justify-content-center">DICEN QUE HACEMOS  LAS MEJORES BURGERS. 
ESTAMOS DE ACUERDO.</strong></h4>
    </div>
  );
};

export default AcercaDeNos;
