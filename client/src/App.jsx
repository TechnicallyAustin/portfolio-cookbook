import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Hero from './components/hero/Hero.jsx';
import Layout from './components/layouts/Layout';
import Header from './components/header/Header';
import Recipe from './components/recipes/Recipe.jsx';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout><Hero /></Layout>} />
        </Routes>
      </Router>

         <Router>
        <Routes>
          <Route path="/" element={<Layout><Recipe /></Layout>} />
        </Routes>
      </Router>

      
    </>
  );
}

export default App
