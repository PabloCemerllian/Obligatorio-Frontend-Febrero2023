import logo from "./logo.svg";
import "./App.css";
import Cabezal from "./componentes/Cabezal/Cabezal";
import Pie from "./componentes/Pie";
import Contenido from "./componentes/Contenido/Contenido";

const App = () => {
  return (
    <>
      <Cabezal></Cabezal>
      <Contenido></Contenido>
      <Pie></Pie>
    </>
  );
};

export default App;
