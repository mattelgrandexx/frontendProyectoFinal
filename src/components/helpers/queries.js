const URL = process.env.REACT_APP_API_BAR_MENU;
const URLPEDIDOS = process.env.REACT_APP_API_BAR_MENU_PEDIDOS;
const URLUSUARIOS = process.env.REACT_APP_API_BAR_MENU_USUARIOS


export const consultarAPI = async()=>{
    try {
        const respuesta = await fetch(URL);
        const listaMenus = await respuesta.json()
        return listaMenus;
    } catch (error) {
        console.log(error);
        return false;
    }
}
export const obtenerMenuApi = async(id)=>{
    try {
        const respuesta = await fetch(URL+'/'+id);
        const menu={
            dato: await respuesta.json(),
            status: respuesta.status
        }
        return menu;
    } catch (error) {
        console.log(error);
        return false;
    }
}

export const crearMenuApi = async(menu)=>{
    try {
        const respuesta = await fetch(URL,{
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(menu)
        });
        return respuesta;
    } catch (error) {
        console.log(error);
        return false;
    }
}

export const borrarMenuApi = async(id)=>{
    try {
        const respuesta = await fetch(URL+'/'+id,{
            method: "DELETE"          
        });
        return respuesta;
    } catch (error) {
        console.log(error);
        return false;
    }
}

export const editarMenuApi = async(id, menu)=>{
    try {
        const respuesta = await fetch(URL+'/'+id,{
            method: "PUT",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(menu)
        });
        return respuesta;
    } catch (error) {
        console.log(error);
        return false;
    }
}

export const consultarUserAPI = async () => {
    try {
      const respuesta = await fetch(URLUSUARIOS);
      const listaUsuarios = await respuesta.json();
      return listaUsuarios;
    } catch (e) {
      console.log(e);
    }
  };

  export const consultarPedidosAPI = async ()=>{
    try {
        const respuesta = await fetch(URLPEDIDOS);
        const listaPedidos = await respuesta.json();
        return listaPedidos;
    } catch (e) {
        console.log(e);
    }
  };

  export const borrarPedidoApi = async(id)=>{
    try {
        const respuesta = await fetch(URLPEDIDOS+'/'+id,{
            method: "DELETE"          
        });
        return respuesta;
    } catch (error) {
        console.log(error);
        return false;
    }
};

export const borrarUsuarioAPI = async(id)=>{
    try {
        const respuesta = await fetch(URLUSUARIOS+'/'+id,{
            method: "DELETE"          
        });
        return respuesta;
    } catch (error) {
        console.log(error);
        return false;
    }
};