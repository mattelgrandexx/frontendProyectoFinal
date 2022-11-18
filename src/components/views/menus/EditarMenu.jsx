import { Form, Button } from "react-bootstrap";
import {useForm} from 'react-hook-form';
import Swal from "sweetalert2";
import { editarMenuApi } from "../../helpers/queries";
import { useParams } from "react-router-dom";


const EditarMenu = () => {
    const{register, handleSubmit, formState:{errors}} = useForm();
    
    const onSubmit = ()=>{
        console.log("desde mi funcion submit")
    }
       
      
    return (
       <section className="container mt-5">
        <h1 className="oswald500">Editar Producto</h1>
        <hr />
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="forNombreProducto">
                <Form.Label>Nombre del Producto</Form.Label>
                <Form.Control 
                type="text" 
                placeholder="Ej: Singular"
                minLength={10}
                maxLength={60}
                {...register("nombreProducto", {
                    required:"El nombre del producto es obligatorio",
                    minLength: {
                        value:10,
                        message:"La cantidad minima de caracteres es de 10"
                    },
                    maxLength:{
                        value:60,
                        message: "La cantidad maxima de caracteres es de 60"
                    }
                })}
                />
                <Form.Text className="text-danger">
                    {errors.nombreProducto?.message}
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="forPrecioProducto">
                <Form.Label>Precio</Form.Label>
                <Form.Control 
                type="number" 
                placeholder="Ej: 100"
                minLength={3}
                maxLength={5}
                {...register("precioMenu", {
                    required: "El precio del producto es obligatorio",
                    min:{
                        value:100,
                        message: "El precio minimo es $100"
                    },
                    max:{
                        value:10000,
                        message: "El precio maximo es de $10000"
                    }
                })}
                />
                <Form.Text className="text-danger">
                    {errors.precioMenu?.message}
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="forImagenMenu">
                <Form.Label>Imagen</Form.Label>
                <Form.Control 
                type="text" 
                placeholder="Ej:https://i.postimg.cc/xCBTZFW1/caritonbanks.png"
                {...register("imagenMenu", {
                    required: "La imagen del producto es obligatoria",
                    pattern: {
                        value: /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/,
                        message: "Debe ingresar una URL valida"
                    }
                })}
                />
                <Form.Text className="text-danger">
                    {errors.imagenMenu?.message}
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="forCategoriaProducto">
                <Form.Label>Categoria</Form.Label>
                <Form.Select {...register("categoriaMenu",{
                    required: "La categoria es obligatoria"
                })}>
            <option value="">Seleccione una opcion</option>
            <option value="Hamburguesas">Hamburguesas</option>
            <option value="Bebidas">Bebidas</option>
            <option value="Extras">Extras</option>
          </Form.Select>
                <Form.Text className="text-danger">
                    {errors.categoriaMenu?.message}
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="forPrecioProducto">
                <Form.Label>Descripcion</Form.Label>
                <Form.Control 
                type="text" 
                placeholder="Ej: Ingredientes"
                minLength={10}
                maxLength={100}
                {...register("descripcionMenu",{
                    required: "La descripcion del producto es obligatoria",
                    minLength: {
                        value:10,
                        message:"La cantidad minima de caracteres es de 10"
                    },
                    maxLength:{
                        value:100,
                        message: "La cantidad maxima de caracteres es de 100"
                    }
                })}
                />
                <Form.Text className="text-danger"></Form.Text>
            </Form.Group>
            <Button className="boton mb-5" type="submit">
                Guardar
            </Button>
        </Form>

       </section>
    );
};

export default EditarMenu;