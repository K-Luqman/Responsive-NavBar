import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Navbar } from './Components/Navbar';
import Home from './Components/pages/Home';
import About from '../src/Components/pages/About'
import Service from '../src/Components/pages/Service'
import Contact from '../src/Components/pages/Contact'


function App() {
  return (
    <div className='App'>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  </div>
  );
}

export default App;
