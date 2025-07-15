function Header() {
  return (
    <header style={{ backgroundColor: '#f5f5f5', padding: '10px' }}>
      <h1>Tá no Jeito!</h1>
      <nav>
        <a href="/">Home</a> | 
        <a href="/produtos">Produtos</a> | 
        <a href="/carrinho">Carrinho</a>
      </nav>
    </header>
  );
}

export default Header;