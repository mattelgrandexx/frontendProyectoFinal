const URL = process.env.REACT_APP_API_RESTO_USER

export const consultarUserApi = async () => {
    try{
        const respuesta = await fetch(URL)
        const listaUsuarios = await respuesta.json()
        return listaUsuarios
    } catch(e){
        console.log(e)
    }
}

export const crearUserApi = async (datos) => {
    try{
        const respuesta = await fetch(URL, {
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


