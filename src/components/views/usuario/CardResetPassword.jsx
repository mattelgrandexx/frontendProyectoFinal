import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { actualizarPass, obtenerEmail } from "../../helpers/queriesLogin";
import Swal from "sweetalert2";

const CardResetPassword = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm();

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("")

  let {token} = useParams()

    useEffect(() => {
        obtenerEmail(token).then((respuesta) => {
          setValue("email", respuesta.email) 
          setEmail(respuesta.email)
     })
    }, [])


  const onSubmit = (datos) => {
    actualizarPass(datos, token).then(respuesta => {
        if(respuesta.status === 200){
            Swal.fire("Contraseña modificada correctamente", "Prueba a iniciar sesion", "success")
            navigate("/login")
        }
    })
  };

  return (
    <div className="mt-5 mainSection">
      <h3 className="text-center">Recuperar contraseña</h3>
      <div className="row justify-content-center">
        <div className="col-8">
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mt-4">
              <Form.Label className="textForm">Correo electronico*</Form.Label>
              <Form.Control
                className="p-2 borderInput"
                type="email"
                disabled
                {...register("email", {
                  required: "Debe ingresar un email",
                  pattern: {
                    value:
                      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g,
                    message: "Debe ingresar un formato valido",
                  },
                })}
                defaultValue={email}
               
              ></Form.Control>
              <Form.Text className="text-danger mb-2 mt-1">
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
                  },
                })}
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              ></Form.Control>
              <Form.Text className="text-danger mb-2 mt-1">
                {errors.password?.message}
              </Form.Text>
            </Form.Group>
            <Button className="mt-4 btnEntrar mb-4" variant="none" type="submit">
            Cambiar contraseña
          </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default CardResetPassword;
