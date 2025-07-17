import { useEffect, useRef, useState } from "react";
import { FaSearch, FaChevronLeft, FaChevronRight, FaStar, FaRegStar } from "react-icons/fa";
import "./style.css";
import logo from "../../assets/tnj.jpeg"; // Certifique-se de que o caminho está correto
import { Link } from "react-router-dom";

export default function Menu() {
  const shapesRef = useRef(null);
  const productsRef = useRef(null);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const container = shapesRef.current;
    const shapes = ["circle", "square", "triangle"];
    const colors = ["#FF6F00", "#FF8C00", "#FFB347", "#FFA500", "#FF4500"];

    function createShape() {
      if (!container) return;
      const shape = document.createElement("div");
      const type = shapes[Math.floor(Math.random() * shapes.length)];
      shape.className = `shape ${type}`;
      const color = colors[Math.floor(Math.random() * colors.length)];
      shape.style.setProperty("--shape-color", color);
      shape.style.top = `${Math.random() * 100}vh`;
      shape.style.left = `${Math.random() * 100}vw`;
      shape.style.transform = `rotate(${Math.random() * 60 - 30}deg)`;
      shape.style.opacity = 0.15;
      container.appendChild(shape);
      setTimeout(() => shape.remove(), 4000);
    }

    const interval = setInterval(createShape, 400);
    return () => {
      clearInterval(interval);
      if (container) container.innerHTML = "";
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      console.log('Login attempt with:', { email, password, rememberMe });
      setIsLoading(false);
    }, 1500);
  };

  const produtos = Array.from({ length: 40 }, (_, i) => ({
    id: i + 1,
    nome: `Produto ${i + 1}`,
    preco: (20 + i * 3).toFixed(2),
    imagem: `https://via.placeholder.com/180x180?text=Produto+${i + 1}`,
    avaliacao: Math.floor(Math.random() * 6),
  }));

  const scrollLeft = () => {
    if (productsRef.current) {
      productsRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (productsRef.current) {
      productsRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="menu-page">
      <div className="shapes-bg" ref={shapesRef} />

      <div className="login-container">
        <div className="login-card">
          <div className="logo-area">
            <img src={logo} alt="Logo Tá no Jeito" className="logo" />
          </div>

          <h2>Bem-vindo de volta!</h2>
          <p className="subtitle">Faça login para acessar sua conta</p>

          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                id="email"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="password">Senha</label>
              <input
                type="password"
                id="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="options">
              <label className="remember-me">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <span>Lembrar de mim</span>
              </label>
              <a href="#forgot-password" className="forgot-password">
                Esqueceu a senha?
              </a>
            </div>

            <button type="submit" className="login-button" disabled={isLoading}>
              {isLoading ? 'Carregando...' : 'Entrar'}
            </button>
          </form>

          <div className="divider"><span>OU</span></div>

          <div className="social-login">
            <button className="social-button google">
              <i className="fab fa-google"></i> Continuar com Google
            </button>
            <button className="social-button github">
              <i className="fab fa-github"></i> Continuar com GitHub
            </button>
          </div>

          <p className="signup-link">
            Não tem uma conta? <Link to="/cadastro">Cadastre-se agora</Link>
          </p>
        </div>
      </div>

      <nav className="navbar">
        <div className="logo">Tá no Jeito</div>
        <div className="search-bar">
          <input type="search" placeholder="Buscar produtos, marcas e muito mais..." />
          <button className="search-btn"><FaSearch /></button>
        </div>
        <div className="nav-links">
          <a href="#promo">Promoções</a>
          <a href="#products">Produtos</a>
          <a href="#contato">Contato</a>
        </div>
      </nav>

      <section className="banner-carousel">
        <div className="banner-track">
          <img src="https://via.placeholder.com/900x250?text=Promoção+Especial+1" alt="Promoção Especial 1" />
          <img src="https://via.placeholder.com/900x250?text=Promoção+Especial+2" alt="Promoção Especial 2" />
          <img src="https://via.placeholder.com/900x250?text=Promoção+Especial+3" alt="Promoção Especial 3" />
        </div>
      </section>

      <section className="products-section" id="products">
        <h2>Ofertas do Dia</h2>
        <div className="products-carousel-wrapper">
          <button className="scroll-btn left" onClick={scrollLeft}><FaChevronLeft /></button>
          <div className="products-carousel" ref={productsRef}>
            {produtos.map(({ id, nome, preco, imagem, avaliacao }) => (
              <article className="product-card" key={id}>
                <img src={imagem} alt={nome} />
                <h3>{nome}</h3>
                <p className="price">R$ {preco}</p>
                <div className="rating">
                  {[...Array(5)].map((_, i) =>
                    i < avaliacao ? <FaStar key={i} color="#ffb400" /> : <FaRegStar key={i} color="#ccc" />
                  )}
                </div>
                <button className="buy-button">Comprar</button>
              </article>
            ))}
          </div>
          <button className="scroll-btn right" onClick={scrollRight}><FaChevronRight /></button>
        </div>
      </section>
    </div>
  );
}
