import React from 'react';
import './style.css';

// Importações das subpastas
import Navbar from './Navbar';
import Carrossel from './Carrossel';
import Produtosd from './Produtosd';
function Menu() {
  return (
    <div className="menu-container">
      <Navbar />
      <Carrossel />
      <Produtosd />
      {/* Adicione aqui outras seções no futuro */}
    </div>
  );
}

export default React.memo(Menu); // Adicionado memo para otimização