import React from 'react'

const SelectMedioGasto = () => {
  return (
    <div className="selectMedioGasto">
    <label htmlFor="slcMedioGasto" className= "form-label">Medio:</label>
        <select className="form-select" id="slcMedioGasto">
            <option selected >Seleccione un medio</option>
            <option value="1">Efectivo</option>
            <option value="2">Debtio</option>
            <option value="3">Credito</option>
        </select>
</div>
  )
}

export default SelectMedioGasto