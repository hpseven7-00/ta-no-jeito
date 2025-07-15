import logo from '/src/assets/tnj.jpeg'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './style.css';



function login(){
const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulando uma requisição de login
    setTimeout(() => {
      console.log('Login attempt with:', { email, password, rememberMe });
      setIsLoading(false);
    }, 1500);
  };
return (
    <div className="login-container">
      <div className="login-card">
        {/* Área para a logo */}
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

        <div className="divider">
          <span>OU</span>
        </div>

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
  );
}
export default login;