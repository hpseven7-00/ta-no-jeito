import { useRef } from "react";
import { FaSearch, FaStar, FaRegStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./style.css";

function Menu() {
  const shapesRef = useRef(null);
  const carouselRef = useRef(null);

  function scrollLeft() {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  }

  function scrollRight() {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  }

  const produtos = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    nome: `Produto ${i + 1}`,
    preco: (20 + i * 2).toFixed(2),
    imagem: "/src/assets/tnj.jpeg",
    avaliacao: Math.floor(Math.random() * 6),
  }));

  return (
    <div className="menu-page">
      <div className="shapes-bg" ref={shapesRef} />

      {/* NAVBAR */}
      <header className="navbar">
        <div className="logo">
          <img src="/src/assets/tnj.jpeg" alt="Logo Tá no Jeito" />
          <span>Tá no Jeito</span>
        </div>
        <div className="search-bar">
          <input type="search" placeholder="Buscar produtos, marcas e muito mais..." />
          <button className="search-btn" aria-label="Buscar">🔍</button>
        </div>
      </header>

  {/* BANNERS DESLIZANTES EM LOOP INFINITO */}
<section className="banner-loop" aria-label="Banners promocionais">
  <div className="banner-track">
    {[...Array(12)].map((_, i) => (
      <div className="banner-item" key={i}>
        <img src="/src/assets/tnj.jpeg" alt={`Banner ${i % 6 + 1}`} />
      </div>
    ))}
  </div>
</section>

      {/* PRODUTOS EM CARROSSEL 3xN */}
      <section className="products-section" aria-label="Produtos em carrossel 3xN">
        <h2>Ofertas Especiais</h2>
        <div className="carousel-wrapper">
          <button className="scroll-btn left" onClick={scrollLeft}>
            <FaChevronLeft />
          </button>

          <div className="carousel" ref={carouselRef}>
            {produtos.map((p) => (
              <div className="product-card" key={p.id}>
                <img src={p.imagem} alt={p.nome} />
                <h3>{p.nome}</h3>
                <p className="price">R$ {p.preco}</p>
                <div className="rating">
                  {[...Array(5)].map((_, i) =>
                    i < p.avaliacao ? <FaStar key={i} /> : <FaRegStar key={i} />
                  )}
                </div>
                <button className="buy-button">Comprar</button>
              </div>
            ))}
          </div>

          <button className="scroll-btn right" onClick={scrollRight}>
            <FaChevronRight />
          </button>
        </div>
      </section>
    </div>
  );
}

export default Menu;
