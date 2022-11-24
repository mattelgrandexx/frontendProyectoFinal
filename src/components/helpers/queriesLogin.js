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
        email: datos.email,
        token: datos.token,
        _id: datos._id,
      };
    } catch (error) {
      console.log("errores en el login");
      return;
    }
  };

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

export const obtenerUsuario = async (token) => {
    try{
        const respuesta = await fetch(URL + `perfilusuarios/confirm/` + token)
        const usuario = await respuesta.json()
        return usuario
    } catch(e){
        console.log(e)
    }
}

