import { BrowserRouter, Route, Routes } from "react-router-dom";
import Administrador from "./components/views/Administrador";
import Header from "../src/components/common/Header"
import PaginaPrincipal from "./components/views/PaginaPrincipal"
import CrearMenu from "./components/views/menus/CrearMenu"
import EditarMenu from "./components/views/menus/EditarMenu"
import DetalleMenu from "./components/views/DetalleMenu"
import Registrarse from "./components/views/Registrarse"
import AcercaDeNos from "./components/views/AcercaDeNos"
import Error404 from "./components/views/Error404"
import {Footer} from "./components/common/Footer"
import EditarPedido from "./components/views/AdminComponents/EditarPedido";

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route exact path='/' element={<PaginaPrincipal/>}></Route>
        <Route exact path='/administrar' element={<Administrador/>}></Route>
        <Route exact path='/administrar/crear' element={<CrearMenu/>}></Route>
        <Route exact path='/administrar/editarMenu/:id' element={<EditarMenu/>}></Route>
        <Route exact path='/administrar/editarPedido/:id' element={<EditarPedido/>}></Route>
        <Route exact path='/detalle/:id' element={<DetalleMenu/>}></Route>
        <Route exact path='/registro' element={<Registrarse/>}></Route>
        <Route exact path='/acerca' element={<AcercaDeNos/>}></Route>
        <Route exact path='*' element={<Error404/>}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
