import React from 'react'

const CampoDeFecha = () => {
  return (
    <div className="campoDeFecha">
        <label htmlFor="fechaIngreso" className="form-label">Fecha:</label>
        <input type="date" className="form-control" id="fechaIngreso"></input>
    </div>
  )
}

export default CampoDeFecha