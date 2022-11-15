import React, {  useState } from 'react'
import IniciarSesion from './IniciarSesion'
import Registrarse from './Registrarse'
import {  Row, Col, Container } from 'react-bootstrap'
import User from './User'

const PerfilUsuario = () => {

const [login, setLogin] = useState(false)

  const iniciarSesion = () => {
    console.log("inicio")
    setLogin(false)
    console.log(login)
  }

  const crearCuenta = () => {
    setLogin(true)
    console.log(login)
    console.log("registro")
  }

  return (
    <Container className='mt-3 mb-3 mainSection '>
    <Row className='gridLogin'>
    <Col xs={4}>
    <User iniciarSesion={iniciarSesion} crearCuenta={crearCuenta}></User>
    </Col>
    <Col xs={8}>
      {
        login ? 
        <>
    <Registrarse></Registrarse> 
        </> : 
        <>
    <IniciarSesion></IniciarSesion>
        </>
      }
    </Col>
    </Row>
    </Container>
  )
}

export default PerfilUsuario