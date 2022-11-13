import React from 'react'
import { Button } from 'react-bootstrap'


const CardMenu = () => {
  return (
    <article className='cardProducto'>
          <div className='cardProducto__desc'>
            <p className='cardProducto__categoria'>Carne vacuna</p>
            <h4 className='cardProducto__nombre m-0'>Superiority</h4>
            <p className='cardProducto__precio m-0'>$1200</p>
            <Button className='cardProducto__btn' type='button'>Agregar a mi pedido</Button>
          </div>
          <div className='cardProducto__imgContainer'>
            <img className='w-100' src={require("../../../img/burger/superiority.png")} alt=""/>
          </div>
        </article>
  )
}

export default CardMenu