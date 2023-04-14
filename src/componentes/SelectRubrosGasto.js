import React from 'react'

const SelectRubrosGasto = () => {
  return (
    <div className="selectRubrosGasto">
        <label htmlFor="slcRubroGasto" className= "form-label">Seleccione un rubro:</label>
                <select className="form-select" id="slcRubroGasto">
                    <option selected >Seleccione un rubro</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
    </div>
  )
}

export default SelectRubrosGasto