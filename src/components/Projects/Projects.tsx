import poke from '../../images/pokeapi.png';
import wiseWallet from '../../images/wisewallet.jpeg';
import rym from '../../images/rickymorty.jpeg';
import radtek from '../../images/radtek.jpeg';
import './Projects.css';

const Projects = () => {
  return (
    <div className='maxContainer'>
      <h1>My Projects</h1>

      <div className="projectContainer1">
        <div className="project1">
          <img className="projectImg" src={radtek} alt="" />
          <a
            className="prLink"
            href="https://github.com/Lucas52352/Gaming-eCommerce"
            target="blank"
          >
            Repository
          </a>
        </div>
        <div className="project1">
          <img className="projectImg" src={poke} alt="" />
          <a
            className="prLink"
            href="https://github.com/Lucas52352/PI-POKEMON"
            target="blank"
          >
            Repository
          </a>
        </div>
      </div>

      <div className="projectContainer2">
        <div className="project2">
          <img className="projectImg" src={rym} alt="" />
          <a
            className="prLink"
            href="https://github.com/Lucas52352/Rick_And_Morty"
            target="blank"
          >
            Repository
          </a>
        </div>

        <div className="project2">
          <img className="projectImg" src={wiseWallet} alt="" />
          <a
            className="prLink"
            href="https://github.com/Ezeko95/Wallet-Wise-client-app"
            target="blank"
          >
            Repository
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
