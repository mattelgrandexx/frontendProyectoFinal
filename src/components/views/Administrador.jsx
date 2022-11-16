import { useEffect, useState } from "react";
import "./admin.css";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";
import ItemMenu from "./menus/ItemMenu";
import { consultarAPI } from "../helpers/queries";
import Swal from "sweetalert2";

const Administrador = () => {
  const [menus, setMenus] = useState([]);
  useEffect(()=>{
    consultarAPI().then(
      (respuesta)=>{
        setMenus(respuesta);
      },
      (reason)=>{
        console.log(reason);
        Swal.fire(
          'Ocurrio un error',
          'Intentelo nuevamente en unos minutos',
          'error'
        )
      }
    )
  },[]);
  return (
    <>
    <section className=""> 

      <section className="container mt-5">
        <div className="d-flex justify-content-between align-items-center">
          <h1 className="oswald500 textoRojo">Productos disponibles</h1>
          <Link className="oswald400 boton textoRojo" to="/administrar/crear">
            Agregar un producto
          </Link>
        </div>
        <hr />
        <Table responsive striped bordered hover className="bordeCajaRojo">
          <thead>
            <tr className="oswald400 textoRojo">
              <th>Cod</th>
              <th>Producto</th>
              <th>Precio</th>
              <th>URL de Imagen</th>
              <th>Categoria</th>
              <th>Descripcion</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody className="oswald400">
            {
              menus.map((menu)=><ItemMenu key={menu.id} menu={menu} setMenus={setMenus}></ItemMenu>)
            }
          </tbody>
        </Table>
      </section>
      <section className="container">
        <div className="d-flex justify-content-between align-items-center mt-5">
          <h1 className="oswald500 textoBlanco">Pedidos disponibles</h1>
        </div>
      </section>
      <section className="container">
        <div>
          <h1 className="oswald500 textoBlanco">Lista de usuarios disponibles</h1>
        </div>
      </section>
    </section>
    </>
  );
};

export default Administrador;
