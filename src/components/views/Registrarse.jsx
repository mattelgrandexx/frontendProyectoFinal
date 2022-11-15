import React, { useEffect, useState } from "react";
import { Form, Card, Button, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { consultarUserApi, crearUserApi } from "../helpers/queriesLogin";

const Registrarse = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [usuarios, setUsuarios] = useState([]);

  const [nombreUsuario, setNombreUsuario] = useState("");
  const [apellidoUsuario, setApellidoUsuario] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  useEffect(() => {
    consultarUserApi().then((respuesta) => {
      setUsuarios(respuesta)
    })
    
  }, [usuarios, setUsuarios])


  const onSubmit = (datos) => {

    const verificacionEmail = usuarios.find(
      (usuario) => usuario.email === datos.email
    );

    if (verificacionEmail) {
      Swal.fire(
        "Este email es existente",
        "Prueba registrarte con otro email",
        "error"
      );
      return;
    } else {
      crearUserApi(datos).then((respuesta) => {
        if (respuesta.status === 201) {
          // setUsuarios([
          //   ...usuarios,
          //   {
          //     nombreUsuario: datos.nombreUsuario,
          //     apellidoUsuario: datos.apellidoUsuario,
          //     email: datos.email,
          //     pass: datos.pass,
          //   },
          // ]);
          Swal.fire(
            `Te registraste correctamente, ${nombreUsuario}, ${apellidoUsuario}`,
            "Disfruta de nuestro contenido.",
            "success"
          );
          localStorage.setItem("usuarioActivo", JSON.stringify(datos.nombreUsuario, datos.apellidoUsuario));
          navigate("/"); 
        } else {
          Swal.fire(
            `Hubo un error inesperado`,
            "Intentelo nuevamente en breve.",
            "error"
          );
        }
      });
    }
  };

  return (
    <Card>
      <Card.Header className="bgColor p-4 m-1 text-center text-white">
        <Card.Title className="textLogin">CREA UNA CUENTA</Card.Title>
      </Card.Header>
      <Card.Body className="mt-4">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mt-4">
            <Form.Label className="textForm">Nombres*</Form.Label>
            <Form.Control
              className="p-2 borderInput"
              type="text"
              {...register("nombreUsuario", {
                required: "Debe ingresar un nombre.",
                minLength: {
                  value: 2,
                  message: "El nombre debe tener al menos 2 caracteres",
                },
                maxLength: {
                  value: 30,
                  message: "El nombre no debe tener mas de 30 caracteres",
                },
              })}
              onChange={(e) => setNombreUsuario(e.target.value)}
              value={nombreUsuario}
            ></Form.Control>
             <Form.Text className="text-danger">
              {errors.nombreUsuario?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mt-4 mb-2">
            <Form.Label className="textForm">Apellidos*</Form.Label>
            <Form.Control
              className="p-2 borderInput"
              type="text"
              {...register("apellidoUsuario", {
                required: "Debe ingresar su apellido.",
                minLength: {
                  value: 2,
                  message: "El nombre debe tener al menos 2 caracteres",
                },
                maxLength: {
                  value: 30,
                  message: "El nombre no debe tener mas de 30 caracteres",
                },
              })}
              onChange={(e) => setApellidoUsuario(e.target.value)}
              value={apellidoUsuario}
            ></Form.Control>
             <Form.Text className="text-danger">
              {errors.apellidoUsuario?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mt-4 mb-2">
            <Form.Label className="textForm">Correo electronico*</Form.Label>
            <Form.Control
              className="p-2 borderInput"
              type="email"
              {...register("email", {
                required: "Debe ingresar un email",
                pattern: {
                  value:
                    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g,
                  message: "Debe ingresar un formato valido",
                },
                unique: "Este email ya esta registrado"
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
            <Form.Control
              className="p-2 borderInput"
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
          <Form.Group>
            <Card.Subtitle className="mt-3 mb-3 textForm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              deleniti sapiente alias nesciunt accusamus laborum doloribus
              facere culpa. Quidem omnis velit necessitatibus. Commodi, animi
              nesciunt. Illum consectetur amet placeat commodi. Lorem ipsum
              dolor sit amet, consectetur adipisicing elit. Excepturi esse
              maxime aspernatur libero, fuga explicabo molestias possimus
              consequatur enim architecto voluptates hic sequi vitae, dicta at
              consectetur officiis earum tenetur.
            </Card.Subtitle>
            <Row>
              <Col xs={1}>
                <Form.Check
                {...register("check", {
                  required: "Debe aceptar los terminos",
                })}
                ></Form.Check>
              </Col>
              <Col xs={11}>
                <p className="textForm">
                  <strong>Acepto terminos y condiciones.</strong>
                </p>
              </Col>
            </Row>
            <Form.Text className="text-danger mb-2">
                {errors.check?.message}
              </Form.Text>
          </Form.Group>
          <Button className="mt-4 btnEntrar" variant="none" type="submit">
            Crear cuenta
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default Registrarse;
