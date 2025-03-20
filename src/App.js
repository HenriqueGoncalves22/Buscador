import React from "react";
import { Routes, Route } from "react-router-dom"; 
import Buscador from "./Components/Buscador";  // Verifique o caminho correto
import Registrar from "./Components/Registrar";  // Verifique o caminho correto

function App() {
  return (
    <Routes>
      <Route path="/" element={<Buscador />} />
      <Route path="/registrar" element={<Registrar />} />
    </Routes>
  );
}

export default App;
