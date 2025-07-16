import { useState } from 'react'
import './App.css'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

import './App.css'
import Header from './components/Header'

function App() {
  return (
    <>
      <Header />

      <main style={{ padding: '20px' }}>
        <h2>Conteúdo da página aqui</h2>
      </main>
    </>
  );
}

export default App;

import React from "react";
import Login from "./Login"; // importa o componente Login

function App() {
  return <Login />; // mostra o login
}

export default App;
