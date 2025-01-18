import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import NotFound from './routes/NotFound';
// import Layout from './components/Layout';
import Layout from './components/Layout1';
import DynamicCard from './components/DynamicCard';
import './index.css';
import GameScreen from './components/GameScreen';
import GameScreen1 from './components/GameScreen1';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<GameScreen />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/GameScreen" element={<GameScreen />} />
          <Route path="/GameScreen1" element={<GameScreen1 />} />
          <Route path="/CLayout" element={<Layout children={undefined} />} />
        </Routes>
      </Layout >
    </BrowserRouter>
  )
}

export default App
