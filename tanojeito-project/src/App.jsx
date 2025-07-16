import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Cadastro from './paginas/Cadastro';
import Login from './paginas/Login';
import Menu from './paginas/Menu';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
