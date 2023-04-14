import React from "react";

const SelectRubrosIngreso = () => {
  return (
    <div className="selectRubrosIngreso">
      <label htmlFor="slcRubroIngreso" className="form-label">
        Seleccione un rubro:
      </label>
      <select className="form-select" id="slcRubroIngreso">
        <option selected>Seleccione un rubro</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
  );
};

export default SelectRubrosIngreso;
