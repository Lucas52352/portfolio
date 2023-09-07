import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navBarContainer">
      <h1 className="title">{"</LR>"}</h1>
      <div className="routeContainer">
        <Link to="/">
          <button className="link">Home</button>
        </Link>
        <Link to="/about">
          <button className="link">About Me</button>
        </Link>
        <Link to="/projects">
          <button className="link">Projects</button>
        </Link>
        <Link to="/contact">
          <button className="link">Contact Me</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
