import React from 'react'
import { Form, Button } from "react-bootstrap";
import {useForm} from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { crearMenuApi } from '../../helpers/queries';
import Swal from 'sweetalert2';


const CrearMenu = () => {
  const {register, handleSubmit, formState:{errors}, reset} = useForm();
  const navegacion = useNavigate();

  const onSubmit = (datos) =>{
    

    crearMenuApi(datos).then((respuesta)=>{
      if(respuesta.status === 201){
        Swal.fire("Producto creado","El producto fue creado exitosamente","success");
        reset();
        navegacion('/administrar');
      }else{
        Swal.fire("Ocurrio un error","El producto no pudo ser creado","error")
      }
    })
  }
  return (
    <section className='fondoBlanco py-5'>

    <section className='mx-5 bordeCajaRojo'>
      <div className=''>
      <h1 className='oswald500 textoRojo'>Nuevo Producto</h1>
      <hr />
      </div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="forNombreProducto">
          <Form.Label className='oswald400 textoRojo'>Nombre producto</Form.Label>
          <Form.Control 
          type="text" 
          placeholder="Ej: Hamburguesa triple"
          minLength={4}
          maxLength={50}
          {...register('nombreMenu', {
            required:'El nombre del producto es obligatorio',
            minLength:{
              value:4,
              message: 'La cantidad de caracteres es 4 como minimo'
            },
            maxLength:{
              value:50,
              message:'La cantidad maxima de caracteres es de 50'
            }
          })}
          />
          <Form.Text className="text-danger">
            {errors.nombreProducto?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="forPrecio">
          <Form.Label className='oswald400 textoRojo'>Precio</Form.Label>
          <Form.Control type="number" placeholder="Ej: 100" 
          {...register('precioMenu',{
            required:'El precio del producto es un dato obligatorio',
            min:{
              value:100,
              message: 'El precio minimo debe ser de $100'
            },
            max:{
              value:10000,
              message: 'El precio maximo debe ser de $10000'
            }
            })
          } />
          <Form.Text className="text-danger">
            {errors.precio?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="forImagen">
          <Form.Label className='oswald400 textoRojo'>Imagen URL</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: https://www.pexels.com/es-es/vans-en-blanco-y-negro-fuera-de-la-decoracion-para-colgar-en-la-pared-1230679/"
            {...register('imagen',{
              required: 'La url de la imagen es obligatoria',
              pattern: {
                value: /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/,
                message: 'Debe ingresar una URL valida'
              }
            })}
            />
          <Form.Text className="text-danger">
            {errors.imagen?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="forCategoria">
          <Form.Label className='oswald400 textoRojo'>Categoria</Form.Label>
          <Form.Select {
            ...register('categoria',{
              required:'Debe seleccionar una categoria'
            })
          }>
            <option value="">Seleccione una opcion</option>
            <option value="hamburguesas">Hamburguesas</option>
            <option value="bebidas">Bebidas</option>
            <option value="extras">Extras</option>
          </Form.Select>
          <Form.Text className="text-danger">
            {errors.categoria?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="forDescripcion">
          <Form.Label className='oswald400 textoRojo'>Descripcion del Producto</Form.Label>
          <Form.Control 
          type="text" 
          placeholder="Ej: Ingredientes"
          minLength={10}
          maxLength={100}
          {...register('descripcion', {
            required:'La descripcion del producto es obligatoria',
            minLength:{
              value:10,
              message: 'La cantidad de caracteres es 10 como minimo'
            },
            maxLength:{
              value:100,
              message:'La cantidad maxima de caracteres es de 100'
            }
          })}
          />
          <Form.Text className="text-danger">
            {errors.descripcion?.message}
          </Form.Text>
        </Form.Group>
       <button className='boton oswald400' type='submit'>Guardar</button>
      </Form>
    </section>
  </section>
  )
}

export default CrearMenu;