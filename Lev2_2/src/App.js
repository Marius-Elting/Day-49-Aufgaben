import './App.css';
import Navigation from './components/Navigation/Navigation';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Blog from './components/pages/Blog';
import Home from './components/pages/Home';
import BlogDetails from './components/BlogDetails/BlogDetails';


function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blogdetails/:name" element={<BlogDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
