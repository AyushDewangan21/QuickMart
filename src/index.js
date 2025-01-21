import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import App from './App';
import Cart from './Components2/Cart';
import Handset from './Components2/Handset';
import Earpod from './Components2/Earpod';
import Led from './Components2/Led';
import Other from './Components2/Other';

import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';



const root = ReactDOM.createRoot(document.getElementById('root'));
// const cartcount=useState(0)
root.render(
  <React.StrictMode>

      <Router>
       <Routes>
       <Route path="/" element={<App />} />
       <Route path="/handset" element={<Handset />} />
       <Route path="/earpod" element={<Earpod />} />
       <Route path="/led" element={<Led />} />
       <Route path="/other" element={<Other />} />
       </Routes>
       </Router>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
