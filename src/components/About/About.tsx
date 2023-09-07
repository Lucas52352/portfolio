import profile from '../../images/opajaime.png';
import cv from '../../assets/Lucas+Rius+CV.pdf';
import resume from '../../images/resume.png';
import henry from '../../images/henry.jpeg';
import fcc from '../../images/FCC.jpeg';
import './About.css';

const About = () => {
  return (
    <div className="maxContainer">
      <h1>Sobre Mi</h1>
      <h2>Hola 👋! Soy Lucas Rius, soy de Argentina 🇦🇷.</h2>
      <div className="aboutContainer">
        <img src={profile} alt="profile" className="profile" />
        <p className="aboutText">
          Soy Desarrollador Fullstack egresado de Soy Henry, especializado en el
          stack de tecnologías PERN y la metodologia SCRUM para los proyectos en
          equipo. Siempre busco nuevos desafíos para superarme y ampliar mis
          conocimientos.
        </p>
      </div>
      <a className="cvContainer" href={cv} download={'Lucas-Rius-CV'}>
        Mi Curriculum
        <img className="curriculum" src={resume} />
      </a>

      <p className="aboutText">Mis Certificaciones</p>
      <div className='certificateContainer'>
        <a
          href="https://www.freecodecamp.org/certification/fccd5cf6aa1-b0fc-4ee3-8797-3b0984de91e8/responsive-web-design"
          target="blank"
        >
          <img className='certificateImg' src={fcc} alt="FreeCodeCamp-Certificate" />
        </a>

        <a
          href="https://certificates.soyhenry.com/new-cert?id=dfbe36f6b6d62f3a4a4cf09326ef03672f4e316ec0f3c78487f48ce3dcc196fc"
          target="blank"
        >
          <img className='certificateImg' src={henry} alt="Henry-Certificate" />
        </a>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <p className="aboutText">Mis Tecnologias: </p>

        <li>HTML5</li>
        <li>CSS3</li>
        <li>Javascript / Typescript</li>
        <li>React.JS</li>
        <li>Redux</li>
        <li>Node.JS</li>
        <li>Express.JS</li>
        <li>PostgreSQL</li>
      </div>
    </div>
  );
};

export default About;
