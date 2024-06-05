import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import ButtonAppBar from './components/Navbar.jsx';
import ActionAreaCard from './components/Card.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ButtonAppBar />
    <ActionAreaCard />
    <App />
  </React.StrictMode>,
)
