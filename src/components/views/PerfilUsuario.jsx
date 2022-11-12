import React from 'react'
import IniciarSesion from './IniciarSesion'
// import Registrarse from './Registrarse'
import { Card, Row, Col, Container, ListGroup, ListGroupItem, Button } from 'react-bootstrap'

const PerfilUsuario = () => {
  return (
    <Container className='mt-3 mb-3 mainSection'>
    <Row>
    <Col xs={4}>
    <Card>
      <Card.Header className='bgRayas p-4 m-1 text-center text-white'>
        <Card.Title className='textUser'>
            USUARIO
        </Card.Title>
      </Card.Header>
      <Card.Body  className='user'>
        <ListGroup className='text-start mt-4' variant="flush">
            <ListGroupItem className='m-3'><Button variant='none'>Iniciar sesion</Button></ListGroupItem>
            <ListGroupItem className='m-3'><Button variant='none'>Registrarse</Button></ListGroupItem>
            <ListGroupItem className='m-3'><Button variant='none'>Mis pedidos</Button></ListGroupItem>
        </ListGroup>
      </Card.Body>
    </Card>
    </Col>
    <Col xs={8}>
    <IniciarSesion></IniciarSesion>
    {/* <Registrarse></Registrarse>  */}
    </Col>
    </Row>
    </Container>
  )
}

export default PerfilUsuario