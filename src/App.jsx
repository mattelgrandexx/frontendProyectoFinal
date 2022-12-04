import "bootstrap/dist/css/bootstrap.min.css";
import './style.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./components/common/Footer";
import { Header } from "./components/common/Header";
import AcercaDeNos from "./components/views/AcercaDeNos";
import DetalleMenu from "./components/views/DetalleMenu";
import Error404 from "./components/views/Error404";
import PaginaPrincipal from "./components/views/PaginaPrincipal";
import PerfilUsuario from "./components/views/usuario/PerfilUsuario";
import 'animate.css';
import './style.css'
import Confirm from "./components/views/usuario/Confirm";

import './app.css'
import RutasProtegidas from "./components/routes/RutasProtegidas";
import RutasAdmin from "./components/routes/RutasAdmin";
import CardResetPassword from "./components/views/usuario/CardResetPassword";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<PaginaPrincipal />}></Route>      
        <Route exact path="/detalle/:id" element={<DetalleMenu />}></Route>
        <Route exact path="/acerca" element={<AcercaDeNos />}></Route>
        <Route exact path="*" element={<Error404 />}></Route>
        <Route exact path="/login" element={<PerfilUsuario />}></Route>
        <Route exact path="/confirmar/:token" element={<Confirm></Confirm>}></Route>
        <Route exact path="/reset/:token" element={<CardResetPassword></CardResetPassword>}></Route>
        <Route path="/administrar/*" element={
        <RutasProtegidas>
          <RutasAdmin></RutasAdmin>
        </RutasProtegidas>
      }>

        </Route>
       </Routes>
      <Footer></Footer>

    </BrowserRouter>
  );
}

export default App;
