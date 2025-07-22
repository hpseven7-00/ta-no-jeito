import React, { useState, useEffect, useRef } from 'react';
import './style.css';

const BannersLoop = () => {
  const banners = [
    {
      id: 1,
      image: '/src/assets/banners/banner1.jpg',
      alt: 'Promoção de Verão',
      link: '/promocoes/verao'
    },
    {
      id: 2,
      image: '/src/assets/banners/banner2.jpg',
      alt: 'Lançamentos Exclusivos',
      link: '/produtos/novidades'
    },
    {
      id: 3,
      image: '/src/assets/banners/banner3.jpg',
      alt: 'Frete Grátis',
      link: '/frete-gratis'
    },
    {
      id: 4,
      image: '/src/assets/banners/banner4.jpg',
      alt: 'Ofertas Relâmpago',
      link: '/ofertas'
    },
    {
      id: 5,
      image: '/src/assets/banners/banner5.jpg',
      alt: 'Coleção Especial',
      link: '/colecao-especial'
    },
    {
      id: 6,
      image: '/src/assets/banners/banner6.jpg',
      alt: 'Descontos Imperdíveis',
      link: '/descontos'
    }
  ];

  const contentRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const positionRef = useRef(0);
  const animationRef = useRef(null);
  const itemWidth = 620; // Largura do banner + margem
  const scrollSpeed = 1; // Velocidade do scroll automático

  // Função para navegar entre os banners
  const navigate = (direction) => {
    const content = contentRef.current;
    if (!content) return;

    const newPosition = positionRef.current + (direction * itemWidth);
    const contentWidth = content.scrollWidth / 2;
    
    // Verifica se precisa fazer o loop
    if (newPosition > 0) {
      positionRef.current = -(contentWidth - itemWidth);
    } else if (newPosition < -(contentWidth)) {
      positionRef.current = 0;
    } else {
      positionRef.current = newPosition;
    }

    content.style.transition = 'transform 0.5s ease-out';
    content.style.transform = `translateX(${positionRef.current}px)`;

    // Remove a transição após a animação
    setTimeout(() => {
      if (content) content.style.transition = 'none';
    }, 500);
  };

  // Animação automática
  const autoScroll = () => {
    if (!isHovered && contentRef.current) {
      positionRef.current -= scrollSpeed;
      
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

  useEffect(() => {
    // Inicia a animação
    animationRef.current = requestAnimationFrame(autoScroll);
    
    return () => {
      cancelAnimationFrame(animationRef.current);
    };
  }, [isHovered]);

  return (
    <div 
      className="banners-loop-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button 
        className="carousel-control prev"
        onClick={() => navigate(1)}
        aria-label="Banner anterior"
      >
        &lt;
      </button>
      
      <div className="banners-loop-wrapper">
        <div className="banners-loop-content" ref={contentRef}>
          {banners.map((banner) => (
            <a
              key={banner.id}
              href={banner.link}
              className="banner-item"
              aria-label={banner.alt}
            >
              <img 
                src={banner.image} 
                alt={banner.alt} 
                className="banner-image"
                loading="lazy"
              />
            </a>
          ))}
          {/* Duplica os banners para o loop contínuo */}
          {banners.map((banner) => (
            <a
              key={`clone-${banner.id}`}
              href={banner.link}
              className="banner-item"
              aria-label={banner.alt}
            >
              <img 
                src={banner.image} 
                alt={banner.alt} 
                className="banner-image"
                loading="lazy"
              />
            </a>
          ))}
        </div>
      </div>
      
      <button 
        className="carousel-control next"
        onClick={() => navigate(-1)}
        aria-label="Próximo banner"
      >
        &gt;
      </button>
    </div>
  );
};

export default React.memo(BannersLoop);