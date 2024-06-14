import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.tsx'
import './index.css'
import Login from "./core/Login/Login.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" Component={App} />
        <Route path="/login" Component={Login} />
      </Routes>
    </Router>
  </React.StrictMode>,
)
