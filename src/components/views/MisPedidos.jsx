import React from 'react'
import { Card } from 'react-bootstrap'

const MisPedidos = () => {
  return (
    <Card className="gridLogin">
    <Card.Header className="bgColor p-4 m-1 text-center text-white">
        <Card.Title className="textLogin">MIS PEDIDOS</Card.Title>
      </Card.Header>
      <Card.Body>
      <Card.Title className='textPedidos text-center d-flex justify-content-center align-items-center'>
        ¡UPS! PARECE QUE TODAVÍA NO HAS REALIZADO NINGÚN PEDIDO
      </Card.Title>
      </Card.Body>
    </Card>
  )
}

export default MisPedidos