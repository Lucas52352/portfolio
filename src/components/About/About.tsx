import profile from '../../images/pfp.png';
import cv from '../../assets/Lucas+Rius+CV.pdf';
import resume from '../../images/resume.png';
import henry from '../../images/henry.jpeg';
import fcc from '../../images/FCC.jpeg';
import html from '../../images/html.png';
import css from '../../images/css.png';
import js from '../../images/js.png';
import ts from '../../images/ts.png';
import react from '../../images/react.png';
import redux from '../../images/redux.png';
import postgresql from '../../images/postgresql.png';
import express from '../../images/expressJs.png';
import node from '../../images/nodeJs.png';

import './About.css';

const About = () => {
  return (
    <div className="maxContainer">
      <h1>About Me</h1>
      <h2>Hello! I'm Lucas Rius, I'm from Argentina 🇦🇷. profile</h2>
      <div className="aboutContainer">
        <img src={profile} alt="profile" className="profile" />
        <p className="aboutText">
          I am a Fullstack Developer graduated from Soy Henry, specialized in
          the PERN technology stack and the SCRUM methodology for team projects.
          I am always looking for new challenges to improve myself and expand my
          knowledge.
        </p>
      </div>

      <p>My Resume</p>
      <a className="cvContainer" href={cv} download={'Lucas-Rius-CV'}>
        <img className="curriculum" src={resume} />
      </a>

      <p className="aboutText">My Certificates</p>
      <div className="certificateContainer">
        <a
          href="https://www.freecodecamp.org/certification/fccd5cf6aa1-b0fc-4ee3-8797-3b0984de91e8/responsive-web-design"
          target="blank"
        >
          <img
            className="certificateImg"
            src={fcc}
            alt="FreeCodeCamp-Certificate"
          />
        </a>

        <a
          href="https://certificates.soyhenry.com/new-cert?id=dfbe36f6b6d62f3a4a4cf09326ef03672f4e316ec0f3c78487f48ce3dcc196fc"
          target="blank"
        >
          <img className="certificateImg" src={henry} alt="Henry-Certificate" />
        </a>
      </div>
      <p className="aboutText">My Tech Stack</p>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          margin: 15,
        }}
      >
        <div className="techs">
          <img className="techImg" src={html} alt="" />
          <p>HTML5</p>
        </div>

        <div className="techs">
          <img className="techImg" src={css} alt="" />
          <p>CSS3</p>
        </div>

        <div className="techs">
          <img className="techImg" src={js} alt="" />
          <p>JavaScript</p>
        </div>

        <div className="techs">
          <img className="techImg" src={ts} alt="" />
          <p>TypeScript</p>
        </div>

        <div className="techs">
          <img className="techImg" src={react} alt="" />
          <p>React JS</p>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          margin: 15,
        }}
      >
        <div className="techs">
          <img className="techImg" src={redux} alt="" />
          <p>Redux</p>
        </div>

        <div className="techs">
          <img className="techImg" src={node} alt="" />
          <p>Node JS</p>
        </div>

        <div className="techs">
          <img className="techImg" src={express} alt="" />
          <p>Express JS</p>
        </div>

        <div className="techs">
          <img className="techImg" src={postgresql} alt="" />
          <p>PostgreSQL</p>
        </div>
      </div>
    </div>
  );
};

export default About;
