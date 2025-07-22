import React, { useState, useEffect, useRef } from 'react';
import './style.css'; // Arquivo CSS renomeado para corresponder ao componente

const Produtosd = () => {
  // Função para carregar imagens
  const getImagePath = (imageName) => {
    try {
      return require(`../../assets/promoções do dia/${imageName}`).default;
    } catch {
      return require(`../../assets/promoções do dia/default.jpg`).default;
    }
  };

  const promoProducts = [
    {
      id: 1,
      image: 'produto1.jpg',
      name: 'Pacote de arroz',
      oldPrice: 'R$ 37,99',
      price: 'R$ 33,99',
      discount: '10% OFF',
      link: '/promo/arroz'
    },
    // Adicione mais produtos aqui
  ];

  const contentRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const positionRef = useRef(0);
  const itemWidth = 300; // Largura do item + margem
  const animationRef = useRef(null);

  // Duplica os produtos para efeito de looping
  const duplicatedProducts = [...promoProducts, ...promoProducts];

  const navigate = (direction) => {
    const content = contentRef.current;
    if (!content) return;

    const maxPosition = -(content.scrollWidth / 2 - itemWidth);
    const newPosition = positionRef.current + (direction * itemWidth);
    
    positionRef.current = Math.max(maxPosition, Math.min(0, newPosition));
    
    content.style.transition = 'transform 0.5s ease';
    content.style.transform = `translateX(${positionRef.current}px)`;

    setTimeout(() => {
      if (content) content.style.transition = 'none';
    }, 500);
  };

  useEffect(() => {
    const autoScroll = () => {
      if (!isHovered && contentRef.current) {
        positionRef.current -= 0.5;
        
        const contentWidth = contentRef.current.scrollWidth / 2;
        if (positionRef.current <= -contentWidth) {
          positionRef.current = 0;
          contentRef.current.style.transition = 'none';
          contentRef.current.style.transform = `translateX(${positionRef.current}px)`;
        } else {
          contentRef.current.style.transform = `translateX(${positionRef.current}px)`;
        }
      }
      animationRef.current = requestAnimationFrame(autoScroll);
    };

    animationRef.current = requestAnimationFrame(autoScroll);
    return () => cancelAnimationFrame(animationRef.current);
  }, [isHovered]);

  return (
    <section className="promo-section">
      <h2 className="promo-title">PROMOÇÕES DO DIA</h2>
      
      <div className="promo-container">
        <button 
          className="promo-nav-button prev"
          onClick={() => navigate(1)}
          aria-label="Anterior"
        >
          &lt;
        </button>
        
        <div 
          className="promo-carousel"
          ref={contentRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {duplicatedProducts.map((product, index) => (
            <article key={`${product.id}-${index}`} className="promo-card">
              <a href={product.link} className="promo-link">
                <span className="promo-discount">{product.discount}</span>
                <img 
                  src={getImagePath(product.image)} 
                  alt={product.name}
                  className="promo-image"
                />
                <div className="promo-details">
                  <h3 className="promo-name">{product.name}</h3>
                  <div className="promo-prices">
                    <span className="promo-old-price">{product.oldPrice}</span>
                    <span className="promo-current-price">{product.price}</span>
                  </div>
                </div>
              </a>
            </article>
          ))}
        </div>
        
        <button 
          className="promo-nav-button next"
          onClick={() => navigate(-1)}
          aria-label="Próximo"
        >
          &gt;
        </button>
      </div>
    </section>
  );
};

export default Produtosd;