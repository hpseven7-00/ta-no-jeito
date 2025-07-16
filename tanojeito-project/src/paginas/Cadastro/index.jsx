import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '/src/assets/tnj.jpeg';
import './style.css';

function Cadastro() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: '',
    confirmarSenha: '',
    aceitarTermos: false
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.nome.trim()) newErrors.nome = 'Nome é obrigatório';
    if (!formData.email.trim()) {
      newErrors.email = 'E-mail é obrigatório';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'E-mail inválido';
    }
    if (formData.senha.length < 6) newErrors.senha = 'Senha deve ter pelo menos 6 caracteres';
    if (formData.senha !== formData.confirmarSenha) newErrors.confirmarSenha = 'Senhas não coincidem';
    if (!formData.aceitarTermos) newErrors.aceitarTermos = 'Você deve aceitar os termos';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      setTimeout(() => {
        console.log('Cadastro:', formData);
        setIsSubmitting(false);
        alert('Cadastro realizado com sucesso!');
        navigate('/menu');
      }, 1500);
    }
  };

  useEffect(() => {
    const container = document.createElement('div');
    container.className = 'shape-container';
    document.body.appendChild(container);

    function createShape() {
      const shape = document.createElement('div');
      shape.className = 'shape';
      const types = ['circle', 'square', 'triangle'];
      const type = types[Math.floor(Math.random() * types.length)];
      shape.classList.add(type);
      shape.style.top = `${Math.random() * 100}vh`;
      shape.style.left = `${Math.random() * 100}vw`;
      const size = `${20 + Math.random() * 30}px`;
      shape.style.width = size;
      shape.style.height = size;
      const colors = ['#e67015', '#3f37c9', '#4cc9f0', '#ffb347', '#ef233c'];
      shape.style.background = colors[Math.floor(Math.random() * colors.length)];
      container.appendChild(shape);
      setTimeout(() => shape.remove(), 5000);
    }

    const interval = setInterval(createShape, 400);
    return () => {
      clearInterval(interval);
      container.remove();
    };
  }, []);

  return (
    <div className="cadastro-container">
      <div className="cadastro-card login-card">
        <div className="logo-area">
          <img src={logo} alt="Logo Tá no Jeito" className="logo" />
        </div>
        <h2>Crie já sua conta</h2>
        <p className="subtitle">Preencha os campos abaixo para se cadastrar</p>

        <form onSubmit={handleSubmit}>
          <div className={`input-group ${errors.nome ? 'error' : ''}`}>
            <label htmlFor="nome">Nome completo</label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              placeholder="Digite seu nome"
            />
            {errors.nome && <span className="error-message">{errors.nome}</span>}
          </div>

          <div className={`input-group ${errors.email ? 'error' : ''}`}>
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="seu@email.com"
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>

          <div className={`input-group ${errors.senha ? 'error' : ''}`}>
            <label htmlFor="senha">Senha</label>
            <input
              type="password"
              id="senha"
              name="senha"
              value={formData.senha}
              onChange={handleChange}
              placeholder="••••••••"
            />
            {errors.senha && <span className="error-message">{errors.senha}</span>}
          </div>

          <div className={`input-group ${errors.confirmarSenha ? 'error' : ''}`}>
            <label htmlFor="confirmarSenha">Confirmar senha</label>
            <input
              type="password"
              id="confirmarSenha"
              name="confirmarSenha"
              value={formData.confirmarSenha}
              onChange={handleChange}
              placeholder="••••••••"
            />
            {errors.confirmarSenha && <span className="error-message">{errors.confirmarSenha}</span>}
          </div>

          <div className={`checkbox-group ${errors.aceitarTermos ? 'error' : ''}`}>
            <label>
              <input
                type="checkbox"
                name="aceitarTermos"
                checked={formData.aceitarTermos}
                onChange={handleChange}
              />
              <span>
                Eu aceito os <Link to="/termos">Termos</Link> e a <Link to="/termos">Política</Link>
              </span>
            </label>
            {errors.aceitarTermos && <span className="error-message">{errors.aceitarTermos}</span>}
          </div>

          <button type="submit" className="cadastro-button login-button" disabled={isSubmitting}>
            {isSubmitting ? 'Cadastrando...' : 'Criar conta'}
          </button>
        </form>

        <div className="login-link">
          Já tem conta? <Link to="/">Faça login</Link>
        </div>
      </div>
    </div>
  );
}

export default Cadastro;
