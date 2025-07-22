import React, { useState, useEffect, useRef } from 'react';
import './style.css';
import logo from '../../../assets/tnj.jpeg';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchHistory, setSearchHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const searchInputRef = useRef(null);

  // Efeito de scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Manipulação da pesquisa
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      alert(`Você pesquisou por: ${searchQuery}`);
      setSearchHistory(prev => [searchQuery, ...prev].slice(0, 5));
      setSearchQuery('');
    }
  };

  // Navegação no histórico
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowUp' && historyIndex < searchHistory.length - 1) {
      e.preventDefault();
      const newIndex = historyIndex + 1;
      setHistoryIndex(newIndex);
      setSearchQuery(searchHistory[newIndex]);
    } else if (e.key === 'ArrowDown' && historyIndex > -1) {
      e.preventDefault();
      const newIndex = historyIndex - 1;
      setHistoryIndex(newIndex);
      setSearchQuery(newIndex === -1 ? '' : searchHistory[newIndex]);
    }
  };

  // Focar no input ao clicar no ícone
  const focusSearch = () => {
    searchInputRef.current.focus();
  };

  // Alternar menu mobile
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        {/* Menu Hambúrguer */}
        <div className="menu-icon" onClick={toggleMenu}>
          <div className={`bar ${menuOpen ? "change" : ""}`}></div>
          <div className={`bar ${menuOpen ? "change" : ""}`}></div>
          <div className={`bar ${menuOpen ? "change" : ""}`}></div>
        </div>

        {/* Logo */}
        <div className="navbar-logo">
          <img src={logo} alt="Tá no jeito" className="logo-img" />
          <span className="logo-text">Tá no jeito</span>
        </div>
        
        {/* Links */}
        <ul className={`navbar-links ${menuOpen ? "active" : ""}`}>
          <li><a href="/" className="nav-link">Home</a></li>
          <li><a href="/produtos" className="nav-link">Produtos</a></li>
          <li><a href="/promocoes" className="nav-link">Promoções</a></li>
          <li><a href="/contato" className="nav-link">Contato</a></li>
        </ul>

        {/* Área Direita */}
        <div className="navbar-right">
          {/* Barra de Pesquisa Avançada */}
          <div className="search-area">
            <button className="search-icon-button" onClick={focusSearch}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M21 21L16.65 16.65" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            
            <form onSubmit={handleSearch} className="search-form">
              <div className="search-wrapper">
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Pesquisar produtos..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setHistoryIndex(-1);
                  }}
                  onKeyDown={handleKeyDown}
                  className="search-input"
                />
                {searchHistory.length > 0 && (
                  <div className="search-history-buttons">
                    <button 
                      type="button" 
                      className="history-button"
                      onClick={() => {
                        if (historyIndex < searchHistory.length - 1) {
                          const newIndex = historyIndex + 1;
                          setHistoryIndex(newIndex);
                          setSearchQuery(searchHistory[newIndex]);
                        }
                      }}
                      disabled={historyIndex >= searchHistory.length - 1}
                    >
                      ↑
                    </button>
                    <button 
                      type="button" 
                      className="history-button"
                      onClick={() => {
                        if (historyIndex > -1) {
                          const newIndex = historyIndex - 1;
                          setHistoryIndex(newIndex);
                          setSearchQuery(newIndex === -1 ? '' : searchHistory[newIndex]);
                        }
                      }}
                      disabled={historyIndex === -1}
                    >
                      ↓
                    </button>
                  </div>
                )}
              </div>
            </form>
          </div>
          
          {/* Carrinho de Compras Destacado */}
          <div className="cart-container">
            <a href="/carrinho" className="cart-link">
              <div className="cart-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="cart-count">3</span>
              </div>
              <span className="cart-text">Carrinho</span>
            </a>
          </div>
        </div>
      </nav>
      
      {/* Espaço entre Navbar e Carrossel */}
      <div className="navbar-spacer"></div>
    </>
  );
};

export default Navbar;