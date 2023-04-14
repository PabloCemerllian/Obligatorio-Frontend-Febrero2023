import React from 'react'

const SeccionTotales = () => {
  return (
    <section  id="totales" className="col-5">
        <h4>Totales</h4>
        <h6>Total de Ingresos: ValorIngreso</h6>
        <h6>Total de Gastos: ValorGasto</h6>
        <h6>Monto total: ValorIngreso-ValorGasto</h6>
    </section>
  )
}

export default SeccionTotales