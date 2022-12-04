import React, { useEffect, useState } from 'react'
import { Col, Container } from 'react-bootstrap'
import { NavLink, useParams } from 'react-router-dom'
import { obtenerUsuario } from '../../helpers/queriesLogin'

const Confirm = () => {

    const [usuario, setUsuario] = useState("")

    let { token } = useParams();
    

    useEffect(() => {
        obtenerUsuario(token).then(respuesta => {
            setUsuario({
              nombreUsuario: respuesta.nombreUsuario,
               email:  respuesta.email,
               estado: respuesta.estado,
               _id: respuesta.id
            })
        })
    }, [token])
  return (
    <Container className='mainSection text-center mt-5 mb-5'>
    <h1 className='pagPrincipal__titulo mt-5'>Te registraste correctamente.</h1>
    <Col className='text-center m-5'>
       <h5 className='textUser'> Bienvenido, {usuario.nombreUsuario}.<br></br>
        Podras iniciar sesion con el siguiente email: '{usuario.email}'
        </h5>
      <br></br>
      <p className='textUser mt-4'>Haz click en el siguiente enlace para <NavLink to={"/login"} className="colorConfirm mt-2" >continuar..</NavLink></p>
      </Col>
    </Container>
  )
}

export default Confirm