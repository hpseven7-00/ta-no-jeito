import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Login from './paginas/Login';  // Nome do componente com letra maiúscula
import Cadastro from './paginas/Cadastro';  // Nome do componente com letra maiúscula
import { useState } from 'react';

function Inicio() {  // Nome do componente com letra maiúscula
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />  {/* Componente com letra maiúscula */}
        <Route path='/cadastro' element={<Cadastro />} />  {/* Componente com letra maiúscula */}
      </Routes>
    </BrowserRouter>
  );
}

export default Inicio;  // Exportação com nome correto