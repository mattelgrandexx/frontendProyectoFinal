import React, {  useState } from 'react'
import IniciarSesion from './IniciarSesion'
import Registrarse from './Registrarse'
import {  Row, Col } from 'react-bootstrap'
import User from './User'
import MisPedidos from './MisPedidos'

const PerfilUsuario = () => {

const [login, setLogin] = useState(false)

  const iniciarSesion = () => {
    setLogin(false)
  }

  const crearCuenta = () => {
    setLogin(true)
  }
  const misPedidos = () => {
    setLogin(null)
  }

  return (
    <Row className='m-5 mainSection d-flex'>
    <Col xs={12} lg={4}>
    <User iniciarSesion={iniciarSesion} crearCuenta={crearCuenta} misPedidos={misPedidos}></User>
    </Col>
    <Col xs={12} lg={8}> 
      {
      login === null ? 
      <>
      <MisPedidos></MisPedidos>
      </>
       :
        <>
        {
        login ? 
        <>
    <Registrarse></Registrarse> 
        </> : 
        <>
    <IniciarSesion></IniciarSesion>
        </>
        }
        </>
      }
    
    </Col>
    </Row>
  )
}

export default PerfilUsuario