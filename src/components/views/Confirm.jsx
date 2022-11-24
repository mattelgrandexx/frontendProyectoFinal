import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { NavLink, useParams } from 'react-router-dom'
import { obtenerUsuario } from '../helpers/queriesLogin'

const Confirm = () => {

    const [usuario, setUsuario] = useState("")
    let { token } = useParams();
    

    useEffect(() => {
        obtenerUsuario(token).then(respuesta => {
            setUsuario({
               email:  respuesta.email,
               estado: respuesta.estado,
               _id: respuesta.id
            })
        })
    }, [token])
  return (
    <Container className='mainSection'>
    <h1>Te registraste correctamente.</h1>
    <p>Haz click en el siguiente enlace para continuar...</p>
    <NavLink to={"/"}>Continuar..</NavLink>
    </Container>
  )
}

export default Confirm