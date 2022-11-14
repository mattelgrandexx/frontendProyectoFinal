import React from 'react'
import { Form, Card, Button, Row, Col } from 'react-bootstrap'

const Registrarse = () => {
  return (
    <Card>
    <Card.Header className='bgColor p-4 m-1 text-center text-white'>
    <Card.Title className='textLogin'>
      CREA UNA CUENTA
    </Card.Title>
    </Card.Header>
    <Card.Body className='mt-4'>
      <Form>
        <Form.Group  className='mt-4'>
          <Form.Label className='textForm'>Nombres*</Form.Label>
          <Form.Control className='p-2 borderInput'>
          </Form.Control>
        </Form.Group>
        <Form.Group  className='mt-4 mb-2'>
          <Form.Label className='textForm'>Apellidos*</Form.Label>
          <Form.Control className='p-2 borderInput'>
          </Form.Control>
        </Form.Group>
        <Form.Group  className='mt-4 mb-2'>
          <Form.Label className='textForm'>Correo electronico*</Form.Label>
          <Form.Control className='p-2 borderInput'>
          </Form.Control>
        </Form.Group>
        <Form.Group  className='mt-4 mb-2'>
          <Form.Label className='textForm'>Contraseña*</Form.Label>
          <Form.Control className='p-2 borderInput'>
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Card.Subtitle className='mt-3 mb-3 textForm'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem deleniti sapiente alias nesciunt accusamus laborum doloribus facere culpa. Quidem omnis velit necessitatibus. Commodi, animi nesciunt. Illum consectetur amet placeat commodi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi esse maxime aspernatur libero, fuga explicabo molestias possimus consequatur enim architecto voluptates hic sequi vitae, dicta at consectetur officiis earum tenetur.
          </Card.Subtitle>
          <Row>
            <Col xs={1}>
          <Form.Check></Form.Check>
          </Col>
          <Col xs={11} >
          <p className='textForm'>
            <strong>Acepto terminos y condiciones.</strong>
          </p>
          </Col>
          </Row>
        </Form.Group>
        <Button className='mt-4 btnEntrar' variant='none'>
          Crear cuenta
        </Button>
      </Form>
    </Card.Body>
  </Card>
  )
}

export default Registrarse