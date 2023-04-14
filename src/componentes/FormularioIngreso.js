import React from 'react'
import CampoDeTexto from './CampoDeTexto'
import SelectRubrosIngreso from './SelectRubrosIngreso'
import SelectMedioIngreso from './SelectMedioIngreso'
import CampoDeNumero from './CampoDeNumero'
import CampoDeFecha from './CampoDeFecha'


const FormularioIngreso = () => {
  return (
    <form className="col-6">
        <CampoDeTexto></CampoDeTexto>
        <SelectRubrosIngreso></SelectRubrosIngreso>
        <SelectMedioIngreso></SelectMedioIngreso>
        <CampoDeNumero></CampoDeNumero>
        <CampoDeFecha></CampoDeFecha>
    </form>
  )
}

export default FormularioIngreso