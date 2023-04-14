import React from "react";
import ListadoDeMovimientos from "./ListadoDeMovimientos";

const SeccionMovimientos = () => {
  return (
    <section id="movimientos" className="col-6">
      <h4>Listado de Movimientos</h4>
      <select className="form-select mb-2">
        <option selected>Tipo de movimiento</option>
        <option value="1">Gastos</option>
        <option value="2">Ingresos</option>
        <option value="3">Todos</option>
      </select>
      <ListadoDeMovimientos></ListadoDeMovimientos>
    </section>
  );
};

export default SeccionMovimientos;
