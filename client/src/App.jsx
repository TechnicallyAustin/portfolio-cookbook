import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Hero from './components/hero/Hero.jsx';
import Layout from './components/layouts/Layout';

import Home from './components/home/Home.jsx';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout><Hero /></Layout>} />
          <Route path="/home" element={<Layout><Home /></Layout>} />
          <Route path="/login" element={<Layout><Home /></Layout>} />
          <Route path="/register" element={<Layout><Home /></Layout>} />
          <Route path="/logout" element={<Layout><Home /></Layout>} />
        </Routes>
      </Router>
      
    </>
  );
}

export default App
