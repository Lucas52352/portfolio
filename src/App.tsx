import './App.css';
import About from './components/About/About';
import Navbar from './components/Navbar/Navbar';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

function App() {

  return (
    <>
    <Router basename='/portfolio'>
    <Navbar />
      <Routes>

      <Route path='/' element={<About />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/contact' element={<Contact />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
