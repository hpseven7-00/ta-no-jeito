import React from "react";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault(); // evita o recarregamento da página
    alert("Login enviado!"); // mostra mensagem temporária
  };

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <h2 style={styles.title}>Tá no Jeito</h2>

        <form onSubmit={handleSubmit}>
          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              placeholder="Digite seu e-mail"
              required
              style={styles.input}
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="username">Usuário</label>
            <input
              type="text"
              id="username"
              placeholder="Digite seu nome de usuário"
              required
              style={styles.input}
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="password">Senha</label>
            <input
              type="password"
              id="password"
              placeholder="Digite sua senha"
              required
              style={styles.input}
            />
          </div>

          <button type="submit" style={styles.button}>Entrar</button>
        </form>

        <div style={styles.footer}>
          © 2025 Tá no Jeito. Todos os direitos reservados.
        </div>
      </div>
    </div>
  );
};

export default Login;

const styles = {
  body: {
    background: "linear-gradient(to right, #ff8000, #ff9933, #ffbb66)", // fundo gradiente
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "'Segoe UI', sans-serif",
  },
  container: {
    backgroundColor: "#fff", // fundo branco do formulário
    padding: "40px",
    borderRadius: "15px",
    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)",
    width: "100%",
    maxWidth: "400px",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#ff8000",
  },
  formGroup: {
    marginBottom: "20px",
  },
  label: {
    display: "block",
    fontWeight: "bold",
    marginBottom: "5px",
    color: "#333",
  },
  input: {
    width: "100%",
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    outline: "none",
  },
  button: {
    width: "100%",
    padding: "12px",
    backgroundColor: "#ff8000",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    cursor: "pointer",
  },
  footer: {
    textAlign: "center",
    marginTop: "20px",
    fontSize: "14px",
    color: "#666",
  },
};
