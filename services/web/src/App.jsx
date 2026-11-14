import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import { Box } from 'lucide-react';
import Overview from './pages/Overview';
import Catalog from './pages/Catalog';
import Licenses from './pages/Licenses';
import Installations from './pages/Installations';
import AIChat from './components/AIChat';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <header className="header">
          <div className="logo">
            <Box size={24} />
            SAMoparser
          </div>
          <nav className="nav-tabs">
            <NavLink to="/" className={({ isActive }) => `nav-tab ${isActive ? 'active' : ''}`} end>Обзор</NavLink>
            <NavLink to="/catalog" className={({ isActive }) => `nav-tab ${isActive ? 'active' : ''}`}>Каталог ПО</NavLink>
            <NavLink to="/licenses" className={({ isActive }) => `nav-tab ${isActive ? 'active' : ''}`}>Лицензии</NavLink>
            <NavLink to="/installations" className={({ isActive }) => `nav-tab ${isActive ? 'active' : ''}`}>Установки</NavLink>
          </nav>
        </header>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/licenses" element={<Licenses />} />
            <Route path="/installations" element={<Installations />} />
          </Routes>
        </main>
      </div>

      <AIChat />
    </BrowserRouter>
  );
}

export default App;
