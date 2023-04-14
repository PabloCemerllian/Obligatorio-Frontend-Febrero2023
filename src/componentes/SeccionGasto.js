import React from 'react'
import FormularioGasto from './FormularioGasto'
import BotonDeFormulario from './BotonDeFormulario'

const SeccionGasto = () => {
  return (
    <section id="gasto" className="col-3">
      <h4>Agregar un gasto</h4>
      <FormularioGasto></FormularioGasto>
      <BotonDeFormulario></BotonDeFormulario>
    </section>

  )
}

export default SeccionGasto