import React from 'react'
import { Navigate } from 'react-router-dom'

const RutasProtegidas = ({children}) => {
    const token = JSON.parse(localStorage.getItem("usuarioActivo")) || null
    if(!token){
        return <Navigate to="/login"></Navigate>
    } else {
        return children
    }
}

export default RutasProtegidas