import React, {  useState } from 'react'
import IniciarSesion from '../usuario/IniciarSesion'
import Registrarse from '../usuario/Registrarse'
import {  Row, Col } from 'react-bootstrap'
import User from '../usuario/User'
import MisPedidos from '../usuario/MisPedidos'

const PerfilUsuario = () => {

const [login, setLogin] = useState(false)

  const iniciarSesion = () => {
    setLogin(false)
  }

  const crearCuenta = () => {
    setLogin(true)
  }
  const misPedidos = () => {
    setLogin(null)
  }

  return (
    <section>
<div>
      <img src="https://i.postimg.cc/BvGbSy6L/bandera.jpg" className="tamañoBandera" alt="" />
  <img src="https://i.postimg.cc/BvGbSy6L/bandera.jpg" className="tamañoBandera" alt="" />
  <img src="https://i.postimg.cc/BvGbSy6L/bandera.jpg" className="tamañoBandera" alt="" />
  <img src="https://i.postimg.cc/BvGbSy6L/bandera.jpg" className="tamañoBandera" alt="" />
</div>
    <Row className='m-5 mainSection d-flex'>
    <Col xs={12} md={4} >
    <User iniciarSesion={iniciarSesion} crearCuenta={crearCuenta} misPedidos={misPedidos}></User>
    </Col>
    <Col xs={12} md={8}> 
      {
        login === null ? 
        <>
      <MisPedidos></MisPedidos>
      </>
       :
        <>
        {
          login ? 
        <>
    <Registrarse></Registrarse> 
        </> : 
        <>
    <IniciarSesion></IniciarSesion>
        </>
        }
        </>
      }
    
    </Col>
    </Row>
      </section>
  )
}

export default PerfilUsuario