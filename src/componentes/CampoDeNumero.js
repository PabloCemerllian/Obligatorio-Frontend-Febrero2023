import React from 'react'

const CampoDeNumero = () => {
  return (
    <div className="campoDeNumero">
        <label htmlFor="numMontoIngreso" className="form-label">Monto:</label>
        <input type="number" className="form-control" id="numMontoIngreso"></input>
    </div>
  )
}

export default CampoDeNumero