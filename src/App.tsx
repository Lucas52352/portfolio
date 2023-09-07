import './App.css';
import About from './components/About/About';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

function App() {

  const scroll = () => {
    window.scrollTo(0, 0)
  }

  return (
    <>
    <Router >
    <Navbar />
      <Routes>

      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/contact' element={<Contact />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
