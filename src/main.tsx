import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './components/NavBar.tsx';
import Footer from './components/Footer.tsx';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <div className=' w-full h-full'>
        <Navbar />
        <App />
        <Footer />
      </div>
    </Router>
  </React.StrictMode>
);