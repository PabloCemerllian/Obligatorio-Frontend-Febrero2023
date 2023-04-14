import React from 'react'

const Moviento = () => {
  return (
    <div className="col-sm-6">
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Tipo de Movimiento</h5>
                <p className="card-text">Concepto del movimiento</p>
                <p className="card-text">Rubro del movimiento</p>
                <p className="card-text">Medio del movimiento</p>
                <p className="card-text">Total del movimiento</p>
                <p className="card-text">Fecha del movimiento</p>
                <a href="#" className="btn btn-primary">Eliminar movimiento</a>
            </div>
        </div>
    </div>
  )
}

export default Moviento