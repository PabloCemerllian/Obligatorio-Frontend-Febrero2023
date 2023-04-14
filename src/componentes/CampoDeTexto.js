import React from 'react'

const CampoDeTexto = () => {
  return (
    <div className="campoDeTexto">
        <label htmlFor="txtConceptoIngreso" className="form-label">Concepto del Ingreso</label>
        <input type="text" className="form-control" id="txtConceptoIngreso"></input>
    </div>
  )
}

export default CampoDeTexto