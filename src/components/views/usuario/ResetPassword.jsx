import React, { useState } from 'react';
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useForm } from 'react-hook-form';

const ResetPassword = (props) => {
  const [email, setEmail] = useState("")
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
  return (
<>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Recuperar contraseña</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label>Ingrese su email</label>
          <Form onSubmit={handleSubmit(props.recuperarPassword)}>
            <Form.Control className="p-2 borderInput"
            type="email"
            {...register("email", {
              required: "Debe ingresar un email",
              pattern: {
                value:
                  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g,
                message: "Debe ingresar un formato valido",
              }
            })}
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            ></Form.Control>
            <Form.Text className="text-danger mb-2 mt-1">
              {errors.email?.message}
            </Form.Text>
            <Col className='float-end mt-4 mb-4 d-flex'>    
          <Button variant="secondary" onClick={props.handleClose} className="m-1">
            Cerrar
          </Button>
          <Button variant="danger" type='submit' className="m-1">
            Enviar
          </Button>
          </Col>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default ResetPassword