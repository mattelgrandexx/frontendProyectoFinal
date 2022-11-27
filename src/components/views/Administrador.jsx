import { useEffect, useState } from "react";
import "./admin.css";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";
import ItemMenu from "./menus/ItemMenu";
import { consultarAPI, consultarPedidosApi } from "../helpers/queries";
import Swal from "sweetalert2";
import ItemUsuario from "./AdminComponents/ItemUsuario";
import ItemPedido from "./AdminComponents/ItemPedido";
import {
  borrarUsuarioAPI,
  consultarUserApi,
  obtenerYDarPermisosUser,
  obtenerYSuspenderUsuario,
} from "../helpers/queriesLogin";

const Administrador = () => {
  const [menus, setMenus] = useState([]);
  useEffect(() => {
    consultarAPI().then(
      (respuesta) => {
        setMenus(respuesta);
      },
      (reason) => {
        console.log(reason);
        Swal.fire(
          "Ocurrio un error",
          "Intentelo nuevamente en unos minutos",
          "error"
        );
      }
    );
  }, []);

  const [pedidos, setPedidos] = useState([]);
  useEffect(() => {
    consultarPedidosApi().then(
      (respuesta) => {
        setPedidos(respuesta);
      },
      (reason) => {
        console.log(reason);
        Swal.fire(
          "Ocurrio un error",
          "Intentelo nuevamente en unos minutos",
          "error"
        );
      }
    );
  }, []);

  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    consultarUserApi().then(
      (users) => {
        setUsuarios(users);
      },
      (reason) => {
        console.log(reason);
        Swal.fire(
          "Ocurrio un error",
          "Intentelo nuevamente en unos minutos",
          "error"
        );
      }
    );
  }, []);
   

  const borrarUsuario = (id) => {
    Swal.fire({
      title: "Esta seguro?",
      text: "No podra revertir este cambio!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "c0050b",
      cancelButtonColor: "#000",
      confirmButtonText: "Eliminar",
    }).then((result) => {
      if (result.isConfirmed) {
        borrarUsuarioAPI(id).then((respuesta) => {
          if (respuesta.status === 200) {
            Swal.fire(
              "Usuario eliminado",
              "El usuario fue eliminado exitosamente",
              "success"
            );
            consultarUserApi().then((users) => {
              setUsuarios(users);
            });
          }
        });
      }
    });
  };

  const suspenderUsuario = (id) => {
    Swal.fire({
      title: "Esta seguro?",
      text: "Le prohibiras el login al usuario..!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "c0050b",
      cancelButtonColor: "#000",
      confirmButtonText: "Suspender",
    }).then((result) => {
      if (result.isConfirmed) {
        obtenerYSuspenderUsuario(id).then((respuesta) => {
          if (respuesta.status === 200) {
            Swal.fire(
              "Usuario suspendido",
              "El usuario fue suspendido exitosamente",
              "success"
            );
          }
        });
      }
    });
  };
  const darPermisosUser = (id) => {
    Swal.fire({
      title: "Esta seguro?",
      text: "Le daras permisos nuevamente al usuario...",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "c0050b",
      cancelButtonColor: "#000",
      confirmButtonText: "Permitir",
    }).then((result) => {
      if (result.isConfirmed) {
        obtenerYDarPermisosUser(id).then((respuesta) => {
          if (respuesta.status === 200) {
            Swal.fire(
              "Usuario con permisos nuevamente",
              "Le dimos permisos al usuario para poder acceder",
              "success"
            );
          }
        });
      }
    });
  };

  return (
    <section className="fondoBlanco">
      <div className="mb-2">
        <img
          src="https://i.postimg.cc/BvGbSy6L/bandera.jpg"
          className="tamañoBandera"
          alt=""
        />
        <img
          src="https://i.postimg.cc/BvGbSy6L/bandera.jpg"
          className="tamañoBandera"
          alt=""
        />
        <img
          src="https://i.postimg.cc/BvGbSy6L/bandera.jpg"
          className="tamañoBandera"
          alt=""
        />
        <img
          src="https://i.postimg.cc/BvGbSy6L/bandera.jpg"
          className="tamañoBandera"
          alt=""
        />
      </div>
      <section className="container bordeCajaRojo fondoBlanco">
        <div className="d-flex justify-content-between align-items-center">
          <h1 className="oswald500 textoRojo">Productos disponibles</h1>
          <Link className="oswald400 boton" to="/administrar/crear">
            Agregar un producto
          </Link>
        </div>
        <hr />
        <Table responsive bordered className="bordeCajaRojo">
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
            {menus.map((menu) => (
              <ItemMenu
                key={menu._id}
                menu={menu}
                setMenus={setMenus}
              ></ItemMenu>
            ))}
          </tbody>
        </Table>
      </section>
      <div className="my-2">
        <img
          src="https://i.postimg.cc/BvGbSy6L/bandera.jpg"
          className="tamañoBandera"
          alt=""
        />
        <img
          src="https://i.postimg.cc/BvGbSy6L/bandera.jpg"
          className="tamañoBandera"
          alt=""
        />
        <img
          src="https://i.postimg.cc/BvGbSy6L/bandera.jpg"
          className="tamañoBandera"
          alt=""
        />
        <img
          src="https://i.postimg.cc/BvGbSy6L/bandera.jpg"
          className="tamañoBandera"
          alt=""
        />
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
              <th>Usuario</th>
              <th>Pedido</th>
              <th className="estadoAncho">Estado</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody className="oswald400">
            {pedidos.map((combo) => (
              <ItemPedido
                key={combo._id}
                combo={combo}
                setPedidos={setPedidos}
              ></ItemPedido>
            ))}
          </tbody>
        </Table>
      </section>
      <div className="my-2">
        <img
          src="https://i.postimg.cc/BvGbSy6L/bandera.jpg"
          className="tamañoBandera"
          alt=""
        />
        <img
          src="https://i.postimg.cc/BvGbSy6L/bandera.jpg"
          className="tamañoBandera"
          alt=""
        />
        <img
          src="https://i.postimg.cc/BvGbSy6L/bandera.jpg"
          className="tamañoBandera"
          alt=""
        />
        <img
          src="https://i.postimg.cc/BvGbSy6L/bandera.jpg"
          className="tamañoBandera"
          alt=""
        />
      </div>
      <section className="container bordeCajaRojo fondoBlanco">
        <div className="d-flex justify-content-between align-items-center">
          <h1 className="oswald500 textoRojo">Lista de usuarios disponibles</h1>
        </div>
        <hr />
        <Table responsive bordered className="bordeCajaRojo">
          <thead>
            <tr className="oswald400 textoRojo">
              <th>Cod</th>
              <th>Nombre Usuario</th>
              <th>Email</th>
              <th>Estado</th>
              <th>Permisos</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody className="oswald400">
            {usuarios.map((usuario) => (
              <ItemUsuario
                key={usuario._id}
                usuarios={usuarios}
                setUsuarios={setUsuarios}
                _id={usuario._id}
                borrarUsuario={borrarUsuario}
                darPermisosUser={darPermisosUser}
                suspenderUsuario={suspenderUsuario}
                permiso={usuario.permiso}
                nombreUsuario={usuario.nombreUsuario}
                email={usuario.email}
                estado={usuario.estado}
              ></ItemUsuario>
            ))}
          </tbody>
        </Table>
      </section>
      <div className="my-2">
        <img
          src="https://i.postimg.cc/BvGbSy6L/bandera.jpg"
          className="tamañoBandera"
          alt=""
        />
        <img
          src="https://i.postimg.cc/BvGbSy6L/bandera.jpg"
          className="tamañoBandera"
          alt=""
        />
        <img
          src="https://i.postimg.cc/BvGbSy6L/bandera.jpg"
          className="tamañoBandera"
          alt=""
        />
        <img
          src="https://i.postimg.cc/BvGbSy6L/bandera.jpg"
          className="tamañoBandera"
          alt=""
        />
      </div>
    </section>
  );
};

export default Administrador;
