import React from 'react'
import { Card, ListGroup, ListGroupItem, Button, Container } from 'react-bootstrap'

const User = (props) => {
  return (
    <Card>
    <Card.Header className='bgRayas p-4 m-1 text-center text-white'>
      <Card.Title className='textUser'>
          USUARIO
      </Card.Title>
    </Card.Header>
    <Card.Body>
      <Container>
      <ListGroup className='text-start mt-4 borderNone' variant="none">
          <ListGroupItem className='m-3 borderNone'><Button variant='none' className='textFuncionesLogin'  onClick={() => props.iniciarSesion()}>Iniciar sesion</Button></ListGroupItem>
          <hr className='hrUser'></hr>
          <ListGroupItem className='m-3 borderNone'><Button variant='none' className='textFuncionesLogin'  onClick={() => props.crearCuenta()}>Registrarse</Button></ListGroupItem>
          <hr className='hrUser'></hr>
          <ListGroupItem className='m-3 borderNone'><Button variant='none' className='textFuncionesLogin' 
          onClick={() => props.misPedidos()}>Mis pedidos</Button></ListGroupItem>
      </ListGroup>
      </Container>
    </Card.Body>
  </Card>
  )
}

export default User