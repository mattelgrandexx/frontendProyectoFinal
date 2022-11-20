
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