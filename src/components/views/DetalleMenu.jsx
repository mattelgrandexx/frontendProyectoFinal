import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { obtenerMenuApi } from '../helpers/queries';
import { Card, Badge } from 'react-bootstrap';

const DetalleMenu = () => {
  const {id} = useParams();
  const[menu, setMenu] = useState({});

  useEffect(()=>{
    obtenerMenuApi(id).then((respuesta)=>{
      if(respuesta.status === 200){
        console.log(respuesta);
        setMenu(respuesta)
      }
    })
  },[])

  return (
   <>
            <Card className="container border rounded my-3 flex-row">
                    <Card.Img
                        variant="start"
                        src={menu.dato?.imagen}
                    />
                    <Card.Body>
                        <div className="anchoDetalleProducto">
                            <Card.Title>{menu.dato?.nombreMenu}</Card.Title>
                            <hr />
                            <Badge bg="success">{menu.dato?.categoria}</Badge>
                            <Card.Text className="mt-3 fw-bold">Precio: ${menu.dato?.precio}</Card.Text>
                        </div>
                    </Card.Body>
            </Card>
        </>
  )
}

export default DetalleMenu