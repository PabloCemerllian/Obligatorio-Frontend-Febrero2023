import './App.css';
import './estilosDashboard.css';

import MiHeader from "./componentes/MiHeader";
import MiMain from "./componentes/MiMain";
import MiFooter from "./componentes/MiFooter";


const App = () => {
  return (
    <>
    <MiHeader className="fondoPrincipal"></MiHeader>
    <MiMain className="fondoPrincipal"></MiMain>
    <MiFooter className="fondoPrincipal"></MiFooter>
    </>
  );
};

export default App;
