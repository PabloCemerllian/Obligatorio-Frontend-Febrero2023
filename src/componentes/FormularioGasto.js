import React from 'react'
import CampoDeTexto from './CampoDeTexto'
import SelectRubrosGasto from './SelectRubrosGasto'
import SelectMedioGasto from './SelectMedioGasto'
import CampoDeNumero from './CampoDeNumero'
import CampoDeFecha from './CampoDeFecha'

const FormularioGasto = () => {
  return (
    <form className="col-6">
        <CampoDeTexto></CampoDeTexto>
        <SelectRubrosGasto></SelectRubrosGasto>
        <SelectMedioGasto></SelectMedioGasto>
        <CampoDeNumero></CampoDeNumero>
        <CampoDeFecha></CampoDeFecha>
    </form>
  )
}

export default FormularioGasto