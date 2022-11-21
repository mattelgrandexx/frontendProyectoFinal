import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { editarMenuApi, obtenerMenuApi } from "../../helpers/queries";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const EditarMenu = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm();
  const { id } = useParams();
  const navegacion = useNavigate();

  const onSubmit = () => {
    editarMenuApi(id).then((respuesta)=>{
        if(respuesta.status === 200){
            Swal.fire(
                "Producto editado",
                "El producto fue correctamente actualizado",
                "success"
              );
              navegacion("/administrar");
        }else{
            Swal.fire("Ocurrio un error","El producto no pudo ser editado","error")
        }
    })
  };

  useEffect(() => {
    obtenerMenuApi(id).then((respuesta) => {
      if (respuesta.status === 200) {
        console.log(respuesta);
        setValue("nombreMenu", respuesta.dato.nombreMenu)
        setValue("precioMenu", respuesta.dato.precioMenu)
        setValue("imagen", respuesta.dato.imagen)
        setValue("descripcion", respuesta.dato.descripcion)
        setValue("categoria", respuesta.dato.categoria)
      }
    });
  }, []);

  return (
    <section className="fondoBlanco ">
      <section className="bordeCajaRojo mt-5 container">
        <h1 className="oswald500 textoRojo">Editar Producto</h1>
        <hr />
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3" controlId="forNombreProducto">
            <Form.Label className="oswald400 textoRojo">Nombre del Producto</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: Singular"
              minLength={4}
              maxLength={60}
              {...register("nombreMenu", {
                required: "El nombre del producto es obligatorio",
                minLength: {
                  value: 4,
                  message: "La cantidad minima de caracteres es de 4",
                },
                maxLength: {
                  value: 60,
                  message: "La cantidad maxima de caracteres es de 60",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.nombreMenu?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="forPrecioMenu">
            <Form.Label className="oswald400 textoRojo">Precio</Form.Label>
            <Form.Control
              type="number"
              placeholder="Ej: 100"
              minLength={3}
              maxLength={5}
              {...register("precioMenu", {
                required: "El precio del producto es obligatorio",
                min: {
                  value: 100,
                  message: "El precio minimo es $100",
                },
                max: {
                  value: 10000,
                  message: "El precio maximo es de $10000",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.precioMenu?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="forImagen">
            <Form.Label className="oswald400 textoRojo">Imagen</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej:https://i.postimg.cc/xCBTZFW1/caritonbanks.png"
              {...register("imagen", {
                required: "La imagen del producto es obligatoria",
                pattern: {
                  value: /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/,
                  message: "Debe ingresar una URL valida",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.imagen?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="forCategoria">
            <Form.Label className="oswald400 textoRojo">Categoria</Form.Label>
            <Form.Select
              {...register("categoria", {
                required: "La categoria es obligatoria",
              })}
            >
              <option value="">Seleccione una opcion</option>
              <option value="hamburguesas">Hamburguesas</option>
              <option value="hebidas">Bebidas</option>
              <option value="extras">Extras</option>
            </Form.Select>
            <Form.Text className="text-danger">
              {errors.categoria?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="forDescripcion">
            <Form.Label className="oswald400 textoRojo">Descripcion</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: Ingredientes"
              minLength={10}
              maxLength={100}
              {...register("descripcion", {
                required: "La descripcion del producto es obligatoria",
                minLength: {
                  value: 10,
                  message: "La cantidad minima de caracteres es de 10",
                },
                maxLength: {
                  value: 100,
                  message: "La cantidad maxima de caracteres es de 100",
                },
              })}
            />
            <Form.Text className="text-danger">
                {errors.descripcion?.message}
            </Form.Text>
          </Form.Group>
          <button type="submit" className="boton oswald400">Guardar</button>
        </Form>
      </section>
    </section>
  );
};

export default EditarMenu;
