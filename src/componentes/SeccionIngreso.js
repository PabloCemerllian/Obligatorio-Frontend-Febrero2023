import React from "react";
import FormularioIngreso from "./FormularioIngreso";
import BotonDeFormulario from "./BotonDeFormulario";

const SeccionIngreso = () => {
  return (
    <section id="ingreso" className="col-3">
      <h4>Agregar un ingreso</h4>
      <FormularioIngreso></FormularioIngreso>
      <BotonDeFormulario></BotonDeFormulario>
    </section>
  );
};

export default SeccionIngreso;
