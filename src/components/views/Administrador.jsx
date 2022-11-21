import { useEffect, useState } from "react";
import "./admin.css";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";
import ItemMenu from "./menus/ItemMenu";
import { consultarAPI, consultarPedidosAPI, consultarUserAPI } from "../helpers/queries";
import Swal from "sweetalert2";
import ItemUsuario from "./AdminComponents/ItemUsuario";
import ItemPedido from "./AdminComponents/ItemPedido";

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

  const[usuarios, setUsuarios] = useState([]);
  useEffect(()=>{
    consultarUserAPI().then((respuesta)=>{
      setUsuarios(respuesta);
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

  const[pedidos, setPedidos] = useState([]);
  useEffect(()=>{
    consultarPedidosAPI().then((respuesta)=>{
      setPedidos(respuesta);
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
  },[])

  return (
  
    <section className="fondoBlanco"> 
<div className="mb-2">
<img src="https://i.postimg.cc/BvGbSy6L/bandera.jpg" className="tamañoBandera" alt="" />
  <img src="https://i.postimg.cc/BvGbSy6L/bandera.jpg" className="tamañoBandera" alt="" />
  <img src="https://i.postimg.cc/BvGbSy6L/bandera.jpg" className="tamañoBandera" alt="" />
  <img src="https://i.postimg.cc/BvGbSy6L/bandera.jpg" className="tamañoBandera" alt="" />
</div>
      <section className="container bordeCajaRojo fondoBlanco">
        <div className="d-flex justify-content-between align-items-center">
          <h1 className="oswald500 textoRojo">Productos disponibles</h1>
          <Link className="oswald400 boton" to="/administrar/crear">
            Agregar un producto
          </Link>
        </div>
        <hr />
        <Table responsive bordered>
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
      <div className="my-2">
      <img src="https://i.postimg.cc/BvGbSy6L/bandera.jpg" className="tamañoBandera" alt="" />
  <img src="https://i.postimg.cc/BvGbSy6L/bandera.jpg" className="tamañoBandera" alt="" />
  <img src="https://i.postimg.cc/BvGbSy6L/bandera.jpg" className="tamañoBandera" alt="" />
  <img src="https://i.postimg.cc/BvGbSy6L/bandera.jpg" className="tamañoBandera" alt="" />
</div>
      <section className="container bordeCajaRojo fondoBlanco">
        <div className="d-flex justify-content-between align-items-center mt-5">
          <h1 className="oswald500 textoRojo">Pedidos disponibles</h1>
          <hr />
        </div>
        <Table responsive bordered className="bordeCajaRojo">
          <thead>
            <tr className="oswald400 textoRojo flex">
              <th>Cod</th>
              <th>Pedido</th>
              <th>Estado</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody className="oswald400">
            {
              pedidos.map((pedido)=><ItemPedido key={pedido.id} pedido={pedido} setPedidos={setPedidos}></ItemPedido>)
            }
          </tbody>
        </Table>
      </section>
      <div className="my-2">
  <img src="https://i.postimg.cc/BvGbSy6L/bandera.jpg" className="tamañoBandera" alt="" />
  <img src="https://i.postimg.cc/BvGbSy6L/bandera.jpg" className="tamañoBandera" alt="" />
  <img src="https://i.postimg.cc/BvGbSy6L/bandera.jpg" className="tamañoBandera" alt="" />
  <img src="https://i.postimg.cc/BvGbSy6L/bandera.jpg" className="tamañoBandera" alt="" />
</div>
      <section className="container bordeCajaRojo fondoBlanco">
        <div className="d-flex justify-content-between align-items-center">
          <h1 className="oswald500 textoRojo">Lista de usuarios disponibles</h1>
          <Link className="oswald400 boton justificarFinal" to="/registro">
            Agregar un usuario
          </Link>
          </div>
          <hr />
          <Table responsive bordered className="bordeCajaRojo">
          <thead>
            <tr className="oswald400 textoRojo">
              <th>Cod</th>
              <th>Nombre Usuario</th>
              <th>Email</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody className="oswald400">
          
             {
              usuarios.map((usuario)=><ItemUsuario key={usuario.id} usuario={usuario} setUsuarios={setUsuarios}></ItemUsuario>)
             }
          
          </tbody>
        </Table>
      </section>
      <div className="my-2">
      <img src="https://i.postimg.cc/BvGbSy6L/bandera.jpg" className="tamañoBandera" alt="" />
  <img src="https://i.postimg.cc/BvGbSy6L/bandera.jpg" className="tamañoBandera" alt="" />
  <img src="https://i.postimg.cc/BvGbSy6L/bandera.jpg" className="tamañoBandera" alt="" />
  <img src="https://i.postimg.cc/BvGbSy6L/bandera.jpg" className="tamañoBandera" alt="" />
</div>
    </section>

  );
};

export default Administrador;
