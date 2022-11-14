import React, {  useState } from 'react'
import IniciarSesion from './IniciarSesion'
import Registrarse from './Registrarse'
import { Card, Row, Col, Container, ListGroup, ListGroupItem, Button } from 'react-bootstrap'

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
    <Card>
      <Card.Header className='bgRayas p-4 m-1 text-center text-white'>
        <Card.Title className='textUser'>
            USUARIO
        </Card.Title>
      </Card.Header>
      <Card.Body  className='user'>
        <ListGroup className='text-start mt-4 borderNone' variant="none">
            <ListGroupItem className='m-3 borderNone'><Button variant='none' className='textFuncionesLogin'  onClick={() => iniciarSesion()}>Iniciar sesion</Button></ListGroupItem>
            <hr className='hrUser'></hr>
            <ListGroupItem className='m-3 borderNone'><Button variant='none' className='textFuncionesLogin'  onClick={() => crearCuenta()}>Registrarse</Button></ListGroupItem>
            <hr className='hrUser'></hr>
            <ListGroupItem className='m-3 borderNone'><Button variant='none' className='textFuncionesLogin'>Mis pedidos</Button></ListGroupItem>
        </ListGroup>
      </Card.Body>
    </Card>
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