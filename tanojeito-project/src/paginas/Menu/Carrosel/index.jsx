import React, { useEffect, useRef } from 'react';
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
  const positionRef = useRef(0);
  const speed = 0.5;

  useEffect(() => {
    const content = contentRef.current;
    if (!content) return;

    // Duplica os itens para criar o loop
    const items = [...content.children];
    items.forEach(item => content.appendChild(item.cloneNode(true)));

    const animate = () => {
      positionRef.current -= speed;
      if (positionRef.current <= -content.scrollWidth / 2) {
        positionRef.current = 0;
      }
      content.style.transform = `translateX(${positionRef.current}px)`;
      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div className="banners-loop-container">
      <div className="banners-loop-content" ref={contentRef}>
        {banners.map((banner) => (
          <a key={banner.id} href={banner.link} className="banner-item">
            <img src={banner.image} alt={banner.alt} className="banner-image" loading="lazy" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default React.memo(BannersLoop);