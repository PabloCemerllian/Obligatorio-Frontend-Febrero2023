import React from 'react'

const SelectMedioIngreso = () => {
  return (
    <div className="selectMedioIngreso">  
        <label htmlFor="slcMedioIngreso" className= "form-label">Medio:</label>
        <select className="form-select" id="slcMedioIngreso">
            <option selected >Seleccione un medio</option>
            <option value="1">Efectivo</option>
            <option value="2">Banco</option>
        </select></div>
  )
}

export default SelectMedioIngreso