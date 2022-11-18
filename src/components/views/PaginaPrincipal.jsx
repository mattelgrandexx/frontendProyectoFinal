import React from 'react'
import { Container } from 'react-bootstrap'
import CardMenu from './menus/CardMenu'


const PaginaPrincipal = () => {
  return (
    <main>
      <section>
        <div>
          <img id='bannerImg' src="https://www.denirohamburgueseria.com.ar/img/fondo1920x1080.png" alt="" />
          <p id='bannerText'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio eaque sapiente, eum consequuntur porro, amet modi explicabo doloremque, excepturi deserunt sit architecto? Magni nemo necessitatibus nesciunt laboriosam libero voluptate blanditiis.</p>
        </div>
      </section>
      <Container>
      <h2 className='pagPrincipal__titulo'>Hamburguesas</h2>
      <section className='p-0 cardContainer'>
        <CardMenu></CardMenu>
        <CardMenu></CardMenu>
        <CardMenu></CardMenu>
        <CardMenu></CardMenu>
        <CardMenu></CardMenu>
        <CardMenu></CardMenu>
      </section>
       
      <h2 className='pagPrincipal__titulo'>Extras</h2>
      <section className='p-0 cardContainer'>
        <CardMenu></CardMenu>
        <CardMenu></CardMenu>
        <CardMenu></CardMenu>
        <CardMenu></CardMenu>
        <CardMenu></CardMenu>
        <CardMenu></CardMenu>
      </section>
      </Container>
    </main>
  )
}

export default PaginaPrincipal