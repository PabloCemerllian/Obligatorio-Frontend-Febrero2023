import React from 'react'
import grafica from "../imagenes/grafica1.png"

const Grafica = () => {
  return (
    <figure className="col-6">
        <img src={grafica} className="img-fluid img-thumbnail" />
    </figure>
  )
}

export default Grafica