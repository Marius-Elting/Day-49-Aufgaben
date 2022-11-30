import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Galarie from './pages/Galarie';
import Kontakt from './pages/Kontakt';
import Oeffnungszeiten from './pages/Oeffnungszeiten';
import Speisekarte from './pages/Speisekarte';



function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/galarie" element={<Galarie />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/oeffnungszeiten" element={<Oeffnungszeiten />} />
          <Route path="/speisekarte" element={<Speisekarte />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;


