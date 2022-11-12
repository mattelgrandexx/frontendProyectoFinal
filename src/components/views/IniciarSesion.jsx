import React from 'react'
import { Button, Card, Form } from 'react-bootstrap'

const IniciarSesion = () => {
  return (
    
    <Card>
      <Card.Header className='bgColor p-4 m-1 text-center text-white'>
      <Card.Title className='textLogin'>
        INICIA SESIÓN
      </Card.Title>
      </Card.Header>
      <Card.Body>
        <Form>
          <Form.Group  className='mt-4'>
            <Form.Label>Correo electronico*</Form.Label>
            <Form.Control>
            </Form.Control>
          </Form.Group>
          <Form.Group  className='mt-4 mb-2'>
            <Form.Label>Contraseña*</Form.Label>
            <Form.Control className='p-2'>
            </Form.Control>
          </Form.Group>
          <Button className='botonesLogin mt-4'>
            Entrar
          </Button>
        </Form>
      </Card.Body>
        <Button className='float-end' variant='none'>No recuerdo mi contraseña</Button>
    </Card>

  )
}

export default IniciarSesion