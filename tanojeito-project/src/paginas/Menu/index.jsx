import React, { useState } from 'react';
import './style.css';
import { FiSearch, FiShoppingCart, FiUser, FiChevronDown } from 'react-icons/fi';
import { motion } from 'framer-motion';
// Importando a imagem do logo - ajuste o caminho conforme necessário
import logo from 'C:/Users/franc/OneDrive/APP/ta-no-jeito/tanojeito-project/src/assets/tnj.jpeg';

const Navbar = () => {
  // Estado para controlar o texto digitado na busca
  const [searchQuery, setSearchQuery] = useState('');
  
  // Estado para controlar qual categoria está ativa no menu
  const [activeCategory, setActiveCategory] = useState(null);

  // Array de categorias que serão exibidas no menu
  const categories = [
    'Ultrabooks', 'Workstations', 'Gamers', 'Acessórios', 
    'Promoções', 'Peças', 'Setup Completo'
  ];

  return (
    <header className="navbar-container">
      {/*
        Barra superior com mensagem promocional animada
        A mensagem vai da direita para esquerda continuamente
      */}
      <div className="top-bar">
        <motion.div
          className="scrolling-message"
          initial={{ x: '100%' }} // Começa totalmente à direita (fora da tela)
          animate={{ 
            x: '-100%', // Termina totalmente à esquerda (fora da tela)
            transition: {
              duration: 20, // Duração da animação em segundos
              repeat: Infinity, // Repete infinitamente
              ease: "linear" // Movimento linear constante
            }
          }}
        >
          🚀 Frete grátis em compras acima de R$ 1.500 • Parcele em 12x sem juros • 5% de desconto no PIX •
        </motion.div>
      </div>

      {/*
        Navbar principal contendo:
        - Logo
        - Barra de pesquisa
        - Ícones de usuário/carrinho
      */}
      <nav className="navbar">
        {/*
          Container do logo com animação ao passar o mouse
          Ao clicar, leva o usuário para o topo da página
        */}
        <motion.div 
          className="navbar-brand"
          whileHover={{ scale: 1.03 }} // Aumenta 3% ao passar o mouse
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          {/* Imagem do logo - substitua pelo caminho correto */}
          <img src={logo} alt="Tá no Jeito" className="logo-img" />
          {/* Texto da marca */}
          <h1>Tá no <span>Jeito</span></h1>
        </motion.div>

        {/*
          Barra de pesquisa com:
          - Input para digitar
          - Botão com ícone de lupa
        */}
        <div className="search-bar-wrapper">
          <input
            type="text"
            value={searchQuery} // Valor controlado pelo estado
            onChange={(e) => setSearchQuery(e.target.value)} // Atualiza o estado
            placeholder="Buscar produtos, marcas e mais..."
            className="search-input"
          />
          {/* Botão com animações de hover e clique */}
          <motion.button 
            className="search-button"
            whileHover={{ backgroundColor: '#E05A00' }} // Muda cor ao passar mouse
            whileTap={{ scale: 0.95 }} // Efeito de clique
          >
            <FiSearch size={18} /> {/* Ícone de lupa */}
          </motion.button>
        </div>

        {/*
          Ações do usuário:
          - Ícone de conta
          - Ícone de carrinho com badge
        */}
        <div className="user-actions">
          {/* Ícone de conta com animação */}
          <motion.div className="action-item" whileHover={{ y: -2 }}>
            <FiUser size={22} />
            <span>Conta</span>
          </motion.div>
          
          {/* Ícone de carrinho com badge animado */}
          <motion.div className="action-item cart" whileHover={{ y: -2 }}>
            <FiShoppingCart size={22} />
            <span>Carrinho</span>
            {/* Badge com número de itens - animação ao aparecer */}
            <motion.span 
              className="cart-count" 
              initial={{ scale: 0 }} // Começa invisível
              animate={{ scale: 1 }} // Cresce para aparecer
            >
              3 {/* Número de itens no carrinho */}
            </motion.span>
          </motion.div>
        </div>
      </nav>

      {/*
        Barra de categorias com scroll horizontal
        Cada categoria tem animação ao passar o mouse
      */}
      <div className="categories-bar">
        {categories.map((category, index) => (
          <motion.div
            key={index}
            className={`category-item ${activeCategory === index ? 'active' : ''}`}
            whileHover={{ backgroundColor: 'rgba(255,255,255,0.15)' }} // Efeito hover
            onClick={() => setActiveCategory(index)} // Marca como ativa ao clicar
          >
            {category}
            <FiChevronDown size={14} /> {/* Ícone de dropdown */}
          </motion.div>
        ))}
      </div>
    </header>
  );
};

export default Navbar;