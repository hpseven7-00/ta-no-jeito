import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '/src/assets/tnj.jpeg'; // Ajuste conforme seu caminho
import './style.css'; // Estilos específicos para cadastro

function Cadastro() {
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
      // Simulando requisição de cadastro
      setTimeout(() => {
        console.log('Dados de cadastro:', formData);
        setIsSubmitting(false);
        alert('Cadastro realizado com sucesso!');
      }, 1500);
    }
  };

  return (
    <div className="cadastro-container">
      <div className="cadastro-card">
        <div className="logo-area">
          <img src={logo} alt="Logo Tá no Jeito" className="logo" />
        </div>

        <h2>Crie sua conta</h2>
        <p className="subtitle">Preencha os campos abaixo para se cadastrar</p>

        <form onSubmit={handleSubmit}>
          <div className={`input-group ${errors.nome ? 'error' : ''}`}>
            <label htmlFor="nome">Nome completo</label>
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="Digite seu nome completo"
              value={formData.nome}
              onChange={handleChange}
            />
            {errors.nome && <span className="error-message">{errors.nome}</span>}
          </div>

          <div className={`input-group ${errors.email ? 'error' : ''}`}>
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="seu@email.com"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>

          <div className={`input-group ${errors.senha ? 'error' : ''}`}>
            <label htmlFor="senha">Senha</label>
            <input
              type="password"
              id="senha"
              name="senha"
              placeholder="••••••••"
              value={formData.senha}
              onChange={handleChange}
            />
            {errors.senha && <span className="error-message">{errors.senha}</span>}
          </div>

          <div className={`input-group ${errors.confirmarSenha ? 'error' : ''}`}>
            <label htmlFor="confirmarSenha">Confirmar senha</label>
            <input
              type="password"
              id="confirmarSenha"
              name="confirmarSenha"
              placeholder="••••••••"
              value={formData.confirmarSenha}
              onChange={handleChange}
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
              <span>Eu li e aceito os <a href="#termos">Termos de Serviço</a> e <a href="#politica">Política de Privacidade</a></span>
            </label>
            {errors.aceitarTermos && <span className="error-message">{errors.aceitarTermos}</span>}
          </div>

          <button type="submit" className="cadastro-button" disabled={isSubmitting}>
            {isSubmitting ? 'Cadastrando...' : 'Criar conta'}
          </button>
        </form>

        <div className="login-link">
          Já tem uma conta? <Link to="/">Faça Login</Link>
        </div>
      </div>
    </div>
  );
}

export default Cadastro;