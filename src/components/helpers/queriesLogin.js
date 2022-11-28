const URL = process.env.REACT_APP_API_RESTO_USER


//funcion para usar en un futuro para listar los usaurios en la parte del administrador 

export const consultarUserApi = async () => {
    try{
        const respuesta = await fetch(URL + "perfilusuarios")
        const listaUsuarios = await respuesta.json()
        return listaUsuarios
    } catch(e){
        console.log(e)
    }
}

export const crearUserApi = async (datos) => {
    try{
        const respuesta = await fetch(URL + "perfilusuarios", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(datos)
        })
        return respuesta
    } catch(e){
        console.log(e)
    }
}

export const login = async (usuario) => {
    try {
      const respuesta = await fetch(URL + "perfilusuarios/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(usuario),
      });
      const datos = await respuesta.json();
          return {
        status: respuesta.status,
        mensaje: datos.mensaje,
        permiso: datos.permiso,
        email: datos.email,
        token: datos.token,
        _id: datos._id,
        estado: datos.estado
      };
    } catch (error) {
      console.log("errores en el login");
      return;
    }
  };

export const obtenerUsuario = async (token) => {
    try{
        const respuesta = await fetch(URL + `perfilusuarios/confirm/` + token)
        const usuario = await respuesta.json()
        return usuario
    } catch(e){
        console.log(e)
    }
}

export const obtenerYSuspenderUsuario = async (_id, req) => {
    try{
        
        const respuesta = await fetch(URL+"perfilusuarios/"+_id,{
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(req)
        })
        const userSuspendido = await respuesta.json()
        return userSuspendido
    } catch(e){
        console.log(e)
    }
}
export const obtenerYDarPermisosUser = async (_id, req) => {
    try{
        const respuesta = await fetch(URL+"perfilusuarios/permisos/"+_id,{
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(req)
        })
        const permisoUser = await respuesta.json()
        return permisoUser
    } catch(e){
        console.log(e)
    }
}

export const borrarUsuarioAPI =  async (_id) => {
    try{
        const respuesta = await fetch(URL+"perfilusuarios/"+_id,{
            method: "DELETE"
        })
        return respuesta
    } catch(e){
        console.log(e)
    }
}

export const recuperarUserPassword = async (datos) => {
    try{
        const respuesta = await fetch(URL + "perfilusuarios/recuperacion", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(datos)
        })
        return respuesta
    } catch(e){
        console.log(e)
    }
}

