import React from 'react'
import contenido from './Contenido.module.css'
import Button from 'react-bootstrap/Button'

const Contenido = () => {
  return (
    <div className={contenido.titulo}>Componente Contenido
    <Button variant="primary">Boton primario </Button></div>
  )
}

export default Contenido