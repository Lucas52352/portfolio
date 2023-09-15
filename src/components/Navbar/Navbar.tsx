import { Link } from 'react-router-dom';
import './Navbar.css';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<Boolean>(false);

  return (
    <div className="navBarContainer">
      <h1 className="title">{'</LR>'}</h1>
      <div  className={`nav_items ${isOpen && 'open'}`}>
        <Link to="/">
          <button className="link">About Me</button>
        </Link>
        <Link to="/projects">
          <button className="link">Projects</button>
        </Link>
        <Link to="/contact">
          <button className="link">Contact Me</button>
        </Link>
      </div>
          <div className={`nav_toggle ${isOpen && 'open'}`} onClick={() => setIsOpen(!isOpen)} >
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
  );
};

export default Navbar;
