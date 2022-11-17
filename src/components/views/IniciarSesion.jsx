import React, { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { consultarUserApi } from "../helpers/queriesLogin";

const IniciarSesion = () => {

  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (datos) => {
    consultarUserApi().then((respuesta) => {
    
      const encontrarEmail = respuesta.find(
        (user) => user.email === datos.email
      );
      if (encontrarEmail) {
        if (encontrarEmail.pass === datos.pass) {
          Swal.fire(
            "Bienvenido",
            `Gracias por contar con nosotros, ${encontrarEmail.nombreUsuario}`,
            "success"
          );
          localStorage.setItem("usuarioActivo", JSON.stringify(encontrarEmail.nombreUsuario));
          navigate("/");
        } else {
          Swal.fire(
            "Error",
            `Contraseña incorrecta, vuelva a intentarlo`,
            "error"
          );
        }
      } else {
        Swal.fire(
          "Usuario o email incorrecto",
          `No encontramos un usuario o email con ese nombre, vuelve a intentarlo`,
          "error"
        );
      }
    });
  };

  const recuperarPassword = () => {
      console.log("aqui deberia recuperar mi contraseña")
  }


  return (
    <Card className="gridLogin">
      <Card.Header className="bgColor p-4 m-1 text-center text-white">
        <Card.Title className="textLogin">INICIA SESIÓN</Card.Title>
      </Card.Header>
      <Card.Body className="mt-4">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mt-4">
            <Form.Label className="textForm">Correo electronico*</Form.Label>
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
             <Form.Text className="text-danger mb-2">
              {errors.email?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mt-4 mb-2">
            <Form.Label className="textForm">Contraseña*</Form.Label>
            <Form.Control className="p-2 borderInput"
            type="password"
            {...register("password", {
              required: "Debe ingresar una contraseña",
              minLength: {
                value: 8,
                message: "Su contraseña debe tener al menos 8 caracteres",
              },
              maxLength: {
                value: 30,
                message:
                  "Su contraseña debe tener como 30 caracteres como maximo",
              }
            })}
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            ></Form.Control>
            <Form.Text className="text-danger mb-2">
                {errors.password?.message}
              </Form.Text>
          </Form.Group>
          <Button className="mt-4 btnEntrar" variant="none" type="submit">
            Entrar
          </Button>
        </Form>
      </Card.Body>
      <Button className="textPass" variant="none" type="button" onClick={() => recuperarPassword()}>
        No recuerdo mi contraseña
      </Button>
    </Card>
  );
};

export default IniciarSesion;
