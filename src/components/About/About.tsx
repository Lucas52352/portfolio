import profile from '../../images/opajaime.png';

const About = () => {
  return (
    <div>
      <h1>Sobre Mi</h1>
        <h2>Hola 👋! Soy Lucas Rius, soy de Argentina 🇦🇷.</h2>
      <div style={{display: 'flex'}}>
        <img src={profile} alt="" />
        <p>
          Soy Desarrollador Fullstack egresado de Soy Henry, especializado en el
          stack de tecnologías PERN. Me gusta aprender nuevas, actualmente estoy
          aprendiendo Java con Springboot. Siempre busco nuevos desafíos para
          superarme y ampliar mis conocimientos.
        </p>



      </div>
        <p>Las tecnologias que se manejar son: </p>
    </div>
  );
};

export default About;
