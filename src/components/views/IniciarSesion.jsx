import React, { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { login, recuperarUserPassword } from "../helpers/queriesLogin";
import ResetPassword from "./ResetPassword";

const IniciarSesion = () => {

  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  
const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (datos) => {
    login(datos).then((respuesta) => {
        if(respuesta.permiso === "Suspendido"){
        Swal.fire(
          "Usuario suspendido",
          `Contacte con el centro de atencion al cliente para solucionar el problema.`,
          "warning"
        );
        navigate("/acerca")
        return
      } 
      if(respuesta.estado ==="no autenticado"){
        Swal.fire(
          "Email no verificado.",
          `Verifica tu email antes de iniciar sesion.`,
          "error"
        );
        return
      } 
      console.log(respuesta)
      if(respuesta.status === 200){
        Swal.fire(
          "Bienvenido",
          `Gracias por contar con nosotros.`,
          "success"
        );
        if(respuesta.admin === "true"){
          localStorage.setItem("usuarioActivo", JSON.stringify(respuesta.email));
          navigate("/administrar");
        } else {
          localStorage.setItem("usuarioNoAdmin", JSON.stringify(respuesta.email));
          navigate("/");
        }
      } else {
      Swal.fire(
        "Email o contraseña incorrecta",
        `No pudimos loguearte, vuelve a intentarlo`,
        "error"
      );
    } 
    
    });
  };
  const recuperarPassword = (datos) => {
   recuperarUserPassword(datos).then(respuesta => {
    if(respuesta.status === 200){
      Swal.fire("Correo de recuperacion enviado.", "Hemos enviado un correo para recuperar tu contraseña.", "success")
      setShow(false)
      setEmail("")
    } else {
      Swal.fire("Hubo un problema.", "No pudimos enviar un correo de recuperacion de contraseña al email indicado, intentelo nuevamente.", "error")
      setEmail("")
    }
   })
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
             <Form.Text className="text-danger mb-2 mt-1">
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
            <Form.Text className="text-danger mb-2 mt-1">
                {errors.password?.message}
              </Form.Text>
          </Form.Group>
          <Button className="mt-4 btnEntrar" variant="none" type="submit">
            Entrar
          </Button>
        </Form>
      </Card.Body>
      <Button className="textPass" variant="none" type="button" onClick={handleShow}>
        No recuerdo mi contraseña
      </Button>
      <ResetPassword handleShow={handleShow} handleClose={handleClose} show={show} email={email} setEmail={setEmail} recuperarPassword={recuperarPassword}></ResetPassword>
    </Card>
  );
};

export default IniciarSesion;
