import React, { useEffect, useState } from 'react'
import { Button, Container, Form, FormControl } from 'react-bootstrap'
import Swal from 'sweetalert2';
import { consultarAPI, consultarPedidosApi } from '../helpers/queries';
import CardMenu from './menus/CardMenu'


const PaginaPrincipal = () => {
  let [menus, setMenus] = useState([]);
  let [hamburguesas, setHamburgesas] = useState([]);
  let [extras, setExtras] = useState([]);
  let [mostrarPopUp, setMostrarPopUp] = useState(false);
  let [pedido, setPedido] = useState([]);

  useEffect(() => {
    consultarAPI().then(
      (respuesta) => {
        setMenus(respuesta);
      },
      (reason) => {
        console.log(reason);
        
        Swal.fire(
          'Ocurrio un error',
          'Intentelo nuevamente en unos minutos',
          'error'
          )
        }
        );

        consultarPedidosApi().then(
          (respuesta) => {
            setPedido(respuesta);
            
          },
          (reason) => {
            console.log(reason);
            Swal.fire(
              "Ocurrio un error",
              "Intentelo nuevamente en unos minutos",
              "error"
            );
          }
        );

        setTimeout(() => {
          setMostrarPopUp(true)
        }, 5000);
      }, []);

      useEffect(() => {
        setHamburgesas(menus.filter(menu => menu.categoria === "hamburguesa"))
        setExtras(menus.filter(menu => menu.categoria === "extra"))
      }, [menus])
      
      const cerrarPopUp = () => {
        setMostrarPopUp(false)
      }

      const popUp = mostrarPopUp ? (
        <section id='popUp'>
          <i class="fa-solid fa-xmark" id='popUp__cerrar' onClick={cerrarPopUp}></i>
        <img src="https://i.postimg.cc/0ySrqx81/bandera-transparente.png" className='w-100' alt="" />
        <div className='px-2 py-2 text-center'>
          <div >
          <img src="https://i.postimg.cc/FFnKd1zQ/LENOLOGO3.png" className='w-25' alt="" />
          </div>
        <h4>Suscríbete!</h4>
        <p className='mb-1 mb-lg-2'>Registrate y enterate de todas nuestras novedades </p>
        <Form>
          <FormControl id='popUp__input' type='text' placeholder='Ingreas tu Email'></FormControl>
        </Form>
        <Button className='cardMenu__btn m-0 mt-3' type='button'>Suscribirse ahora</Button>
        </div>
      </section>
      ) : null;

  return (
    <main>
      <section>
        <div>
          <img id='bannerImg' src="https://www.denirohamburgueseria.com.ar/img/fondo1920x1080.png" alt="" />
          <p id='bannerText'>Viví la experiencia Leno, THE REAL AMERICAN FOOD IS HERE </p>
        </div>
      </section>
      <Container>
      <h2 className='pagPrincipal__titulo'>Hamburguesas</h2>
      <section className='p-0 cardContainer'>
      {hamburguesas.map((menu)=><CardMenu key={menu.id} menu={menu} pedido={pedido} setPedido={setPedido}></CardMenu>)}
      </section>
       
      <h2 className='pagPrincipal__titulo'>Extras</h2>
      <section className='p-0 cardContainer'>
      {extras.map((menu)=><CardMenu key={menu.id} menu={menu} pedido={pedido} setPedido={setPedido}></CardMenu>)}
      </section>
      </Container>
      {popUp}
    </main>
  )
}

export default PaginaPrincipal