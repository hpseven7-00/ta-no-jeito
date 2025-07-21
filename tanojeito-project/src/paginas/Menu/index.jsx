import React from 'react';
import './style.css';

// Importações das subpastas
import Navbar from './Barra de pesquisa';
import Carrossel from './Carrosel';

function Menu() {
  return (
    <div className="menu-container">
      <Navbar />
      <Carrossel />
      {/* Adicione aqui outras seções no futuro */}
    </div>
  );
}

export default Menu;