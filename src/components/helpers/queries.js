const URLMENU = process.env.REACT_APP_API_BAR_MENU;
const URLPEDIDOS = process.env.REACT_APP_API_BAR_MENU_PEDIDOS;


// QUERIES MENU

export const consultarAPI = async()=>{
    try {
        const respuesta = await fetch(URLMENU + "/menus");
        const listaMenus = await respuesta.json()
        return listaMenus;
    } catch (error) {
        console.log(error);
        return false;
    }
}
export const obtenerMenuApi = async(id)=>{
    try {
        const respuesta = await fetch(URLMENU+'/menus/'+id);
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
        const respuesta = await fetch(URLMENU + "/menus",{
            method: "POST",
            headers:{
                "Content-Type": "application/json",
                // "x-token":"..."
            },
            body: JSON.stringify(menu)
        });
        return respuesta;
    } catch (error) {
        console.log(error);
        return false;
    }
}

export const borrarMenuApi = async(_id)=>{
    try {
        const respuesta = await fetch(URLMENU+'/menus/'+_id,{
            method: "DELETE"          
        });
        return respuesta;
    } catch (error) {
        console.log(error);
        return false;
    }
}

export const editarMenuApi = async(_id, menu)=>{
    try {
        const respuesta = await fetch(URLMENU+'/menus/'+_id,{
            method: "PUT",
            headers:{
                "Content-Type": "application/json",
                // "x-token":"..."

            },
            body: JSON.stringify(menu)
        });
        return respuesta;
    } catch (error) {
        console.log(error);
        return false;
    }
}

// QUERIES PEDIDOS



  export const borrarPedidoApi = async(_id)=>{
    try {
        const respuesta = await fetch(URLPEDIDOS+'/combos/'+_id,{
            method: "DELETE"          
        });
        return respuesta;
    } catch (error) {
        console.log(error);
        return false;
    }
};
// Pedidos



  export const editarPedidoApi = async (_id, pedido) => {
    try {
      const respuesta = await fetch(URLPEDIDOS + "/combos/" + _id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(pedido),
      });
      return respuesta;
    } catch (error) {
      console.log(error);
      return false;
    }
  };




  export const consultarPedidosApi = async () => {
    try {
      const respuesta = await fetch(URLPEDIDOS + "/combos");
      const listaPedidos = await respuesta.json();
      return listaPedidos;
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  export const crearPedidoApi = async (menu) => {
    try {
      const respuesta = await fetch(URLPEDIDOS + "/combos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(menu),
      });
      return respuesta;
    } catch (error) {
      console.log(error);
      return false;
    }
  };
  

