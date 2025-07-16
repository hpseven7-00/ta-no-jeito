import { useEffect, useRef, useState } from "react";
import { FaSearch, FaChevronLeft, FaChevronRight, FaStar, FaRegStar } from "react-icons/fa";
import "./style.css";

function Menu() {
  const shapesRef = useRef(null);
  const productsRef = useRef(null);

  // Criação das formas geométricas animadas no fundo
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

  // Exemplo com 40 produtos
  const produtos = Array.from({ length: 40 }, (_, i) => ({
    id: i + 1,
    nome: `Produto ${i + 1}`,
    preco: (20 + i * 3).toFixed(2),
    imagem: `https://via.placeholder.com/180x180?text=Produto+${i + 1}`,
    avaliacao: Math.floor(Math.random() * 6), // 0 a 5 estrelas
  }));

  // Funções para controlar scroll do carrossel de produtos
  function scrollLeft() {
    if (productsRef.current) {
      productsRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  }
  function scrollRight() {
    if (productsRef.current) {
      productsRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  }

  return (
    <div className="menu-page">
      <div className="shapes-bg" ref={shapesRef} />

      {/* Navbar fixa */}
      <nav className="navbar">
        <div className="logo">Tá no Jeito</div>
        <div className="search-bar">
          <input type="search" placeholder="Buscar produtos, marcas e muito mais..." />
          <button className="search-btn" aria-label="Buscar">
            <FaSearch />
          </button>
        </div>
        <div className="nav-links">
          <a href="#promo">Promoções</a>
          <a href="#products">Produtos</a>
          <a href="#contato">Contato</a>
        </div>
      </nav>

      {/* Banner carrossel */}
      <section className="banner-carousel" aria-label="Promoções">
        <div className="banner-track">
          <img src="https://via.placeholder.com/900x250?text=Promoção+Especial+1" alt="Promoção Especial 1" />
          <img src="https://via.placeholder.com/900x250?text=Promoção+Especial+2" alt="Promoção Especial 2" />
          <img src="https://via.placeholder.com/900x250?text=Promoção+Especial+3" alt="Promoção Especial 3" />
        </div>
      </section>

      {/* Produtos */}
      <section className="products-section" id="products" aria-label="Ofertas do dia">
        <h2>Ofertas do Dia</h2>
        <div className="products-carousel-wrapper">
          <button className="scroll-btn left" onClick={scrollLeft} aria-label="Deslizar para esquerda">
            <FaChevronLeft />
          </button>

          <div className="products-carousel" ref={productsRef} tabIndex={0}>
            {produtos.map(({ id, nome, preco, imagem, avaliacao }) => (
              <article className="product-card" key={id} tabIndex={-1} aria-label={`${nome} por R$${preco}`}>
                <img src={imagem} alt={nome} loading="lazy" />
                <h3>{nome}</h3>
                <p className="price">R$ {preco}</p>
                <div className="rating" aria-label={`Avaliação: ${avaliacao} de 5 estrelas`}>
                  {[...Array(5)].map((_, i) =>
                    i < avaliacao ? <FaStar key={i} color="#ffb400" /> : <FaRegStar key={i} color="#ccc" />
                  )}
                </div>
                <button className="buy-button">Comprar</button>
              </article>
            ))}
          </div>

          <button className="scroll-btn right" onClick={scrollRight} aria-label="Deslizar para direita">
            <FaChevronRight />
          </button>
        </div>
      </section>
    </div>
  );
}

export default Menu;
