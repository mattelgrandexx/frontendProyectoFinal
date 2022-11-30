import { Route, Routes } from "react-router-dom"
import Administrador from "../views/Administrador"
import CrearMenu from "../views/menus/CrearMenu"
import EditarMenu from "../views/menus/EditarMenu"

const RutasAdmin = () => {
  return (
    <>
    <Routes>
    <Route exact path="/" element={<Administrador />}></Route>
    <Route exact path="/crear" element={<CrearMenu />}></Route>
    <Route exact path='/editarMenu/:id' element={<EditarMenu/>}></Route>
    </Routes>
    </>
  )
}

export default RutasAdmin