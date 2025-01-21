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
import UserProfile from './components/UserProfile';
import Banner from './components/GameScreen2';
import { MenuProvider } from './context/MenuContext';

function App() {
  return (
    <BrowserRouter>
      <MenuProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<GameScreen1 />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/GameScreen" element={<GameScreen />} />
            <Route path="/GameScreen" element={<GameScreen />} />
            <Route path="/CLayout" element={<Layout children={undefined} />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/gamescreen2" element={<Banner />} />
          </Routes>
        </Layout >
      </MenuProvider>
    </BrowserRouter>
  )
}

export default App
