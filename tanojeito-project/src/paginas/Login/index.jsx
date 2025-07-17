import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from '/src/assets/tnj.jpeg';
import googleLogo from '/src/assets/google.png';
import githubLogo from '/src/assets/github.png';
import './style.css';

function Login() {
  const [shapes, setShapes] = useState([]);
  const [poppedCount, setPoppedCount] = useState(0);
  const [redCount, setRedCount] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const [bonusActive, setBonusActive] = useState(false);
  const [bonusTimeLeft, setBonusTimeLeft] = useState(0);

  const timerRef = useRef(null);
  const bonusTimerRef = useRef(null);

  const createShape = (forceWhite = false) => {
    const colors = ['#f400bbed', '#0059ffff', '#19fc00ff', '#ffea00ff'];
    const redColor = '#FF0000';

    if (forceWhite) {
      return {
        id: Math.random().toString(36).substr(2, 9),
        top: Math.random() * 90 + 5,
        left: Math.random() * 90 + 5,
        size: 30 + Math.random() * 50,
        color: '#fff',
        exploding: false,
        isBlack: false,
        isWhite: true,
        isGreen: false,
        isRed: false,
      };
    }

    const rand = Math.random();
    if (rand < 0.10) {
      return {
        id: Math.random().toString(36).substr(2, 9),
        top: Math.random() * 90 + 5,
        left: Math.random() * 90 + 5,
        size: 30 + Math.random() * 50,
        color: '#000',
        exploding: false,
        isBlack: true,
        isWhite: false,
        isGreen: false,
        isRed: false,
      };
    }
    if (rand < 0.25) {
      return {
        id: Math.random().toString(36).substr(2, 9),
        top: Math.random() * 90 + 5,
        left: Math.random() * 90 + 5,
        size: 30 + Math.random() * 50,
        color: '#0f0',
        exploding: false,
        isBlack: false,
        isWhite: false,
        isGreen: true,
        isRed: false,
      };
    }
    if (rand < 0.40) {
      return {
        id: Math.random().toString(36).substr(2, 9),
        top: Math.random() * 90 + 5,
        left: Math.random() * 90 + 5,
        size: 30 + Math.random() * 50,
        color: redColor,
        exploding: false,
        isBlack: false,
        isWhite: false,
        isGreen: false,
        isRed: true,
      };
    }

    const color = colors[Math.floor(Math.random() * colors.length)];
    return {
      id: Math.random().toString(36).substr(2, 9),
      top: Math.random() * 90 + 5,
      left: Math.random() * 90 + 5,
      size: 30 + Math.random() * 50,
      color,
      exploding: false,
      isBlack: false,
      isWhite: false,
      isGreen: false,
      isRed: false,
    };
  };

  useEffect(() => {
    const initialShapes = [];
    for (let i = 0; i < 12; i++) {
      initialShapes.push(createShape());
    }
    setShapes(initialShapes);
  }, []);

  useEffect(() => {
    if (gameStarted) {
      const minDuration = 5;
      const maxDuration = 20;
      const duration = minDuration + ((timeLeft / 30) * (maxDuration - minDuration));
      document.documentElement.style.setProperty('--float-duration', `${duration}s`);
    } else {
      document.documentElement.style.setProperty('--float-duration', '20s');
    }
  }, [timeLeft, gameStarted]);

  useEffect(() => {
    if (gameStarted && timeLeft > 0) {
      timerRef.current = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    } else if (timeLeft === 0 && gameStarted) {
      setGameStarted(false);
      alert(`Fim do jogo! Você estourou ${poppedCount} bolinhas e marcou ${calculatePoints()} pontos!`);
      resetGame();
    }
    return () => clearTimeout(timerRef.current);
  }, [gameStarted, timeLeft]);

  useEffect(() => {
    if (bonusActive && bonusTimeLeft > 0) {
      bonusTimerRef.current = setTimeout(() => setBonusTimeLeft(bonusTimeLeft - 1), 1000);
    } else if (bonusTimeLeft === 0) {
      setBonusActive(false);
    }
    return () => clearTimeout(bonusTimerRef.current);
  }, [bonusActive, bonusTimeLeft]);

  const resetGame = () => {
    setPoppedCount(0);
    setRedCount(0);
    setTimeLeft(30);
    setBonusActive(false);
    setBonusTimeLeft(0);
    const initialShapes = [];
    for (let i = 0; i < 12; i++) {
      initialShapes.push(createShape());
    }
    setShapes(initialShapes);
  };

  const calculatePoints = () => {
    const basePoints = poppedCount + redCount;
    return bonusActive ? basePoints * 2 : basePoints;
  };

  const handleMouseEnter = (id) => {
    setShapes((oldShapes) => {
      const explodingShape = oldShapes.find((shape) => shape.id === id);
      if (!explodingShape) return oldShapes;

      const newShapes = oldShapes.map((shape) =>
        shape.id === id ? { ...shape, exploding: true } : shape
      );

      setTimeout(() => {
        setShapes((currentShapes) => {
          let replacedShapes = currentShapes.filter((shape) => shape.id !== id);

          if (explodingShape.isBlack) {
            replacedShapes = replacedShapes.map((shape) => ({
              ...shape,
              top: Math.random() * 90 + 5,
              left: Math.random() * 90 + 5,
              exploding: false,
            }));
          }

          replacedShapes = [
            ...replacedShapes,
            createShape(),
            createShape(),
          ];

          const hasWhite = replacedShapes.some((s) => s.isWhite);
          if (poppedCount > 0 && poppedCount % 50 === 0 && !hasWhite) {
            replacedShapes.push(createShape(true));
          }
          if (poppedCount > 0 && poppedCount % 10 === 0 && !hasWhite) {
            replacedShapes.push(createShape(true));
          }

          if (replacedShapes.length > 40) {
            replacedShapes = replacedShapes.slice(-40);
          }

          return replacedShapes;
        });
      }, 300);

      return newShapes;
    });

    setPoppedCount((count) => {
      let newCount = count + 1;
      const shape = shapes.find((s) => s.id === id);
      if (shape?.isRed) {
        setRedCount((r) => r + 1);
      }
      if (shape?.isWhite) {
        setBonusActive(true);
        setBonusTimeLeft(10);
      }
      if (shape?.isGreen && bonusActive) {
        setBonusTimeLeft((time) => Math.max(0, time - 4));
      }
      if (newCount === 5 && !gameStarted) {
        setGameStarted(true);
        setTimeLeft(30);
      }
      return newCount;
    });
  };

  return (
    <div className="login-container">
      <div className="animated-shapes">
        {shapes.map((shape) => (
          <div
            key={shape.id}
            className={`shape ${shape.exploding ? 'explode' : ''}`}
            style={{
              top: `${shape.top}%`,
              left: `${shape.left}%`,
              width: `${shape.size}px`,
              height: `${shape.size}px`,
              backgroundColor: shape.color,
            }}
            onMouseEnter={() => handleMouseEnter(shape.id)}
          />
        ))}
      </div>

      <div className="login-box">
        <img src={logo} alt="Logo" className="login-logo" />
        <h2>Bem-vindo de volta!</h2>

        {/* ⏱️ Pontuação e tempo centralizado */}
        {gameStarted && (
          <div className="score-box">
            <strong>Tempo:</strong> {timeLeft}s<br />
            <strong>Pontos:</strong> {calculatePoints()} {bonusActive && <span>(Bônus ativo!)</span>}
          </div>
        )}

        <form onSubmit={(e) => e.preventDefault()}>
          <input type="email" placeholder="Seu e-mail" required />
          <input type="password" placeholder="Sua senha" required />
          <button type="submit">Entrar</button>
        </form>

        <div className="social-login">
          <p>Ou entre com:</p>
          <div className="social-buttons">
            <button className="google-btn">
              <img src={googleLogo} alt="Google" />
              Google
            </button>
            <button className="github-btn">
              <img src={githubLogo} alt="GitHub" />
              GitHub
            </button>
          </div>
        </div>

        <div className="register-link">
          <p>
            Tem conta?
            <br />
            <Link to="/cadastro">Faça cadastro</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
