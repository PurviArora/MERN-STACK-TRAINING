import "./Skills.css";

const Skills = () => {
  return (
    <div className="skills-page">
      <div className="skills-container">
        <h1>My Skills</h1>

        <p className="skills-text">
          Technologies and tools that I use to build modern, responsive web applications.
        </p>

        <div className="skills-grid-three">
          <div className="skill-card">
            <h3>HTML5</h3>
            <p>Semantic and responsive web structure.</p>
          </div>

          <div className="skill-card">
            <h3>CSS3</h3>
            <p>Modern layouts, Flexbox, Grid and animations.</p>
          </div>

          <div className="skill-card">
            <h3>JavaScript</h3>
            <p>Interactive and dynamic web applications.</p>
          </div>
        </div>

        <div className="skills-grid-four">
          <div className="skill-card">
            <h3>MongoDB</h3>
            <p>NoSQL database for MERN applications.</p>
          </div>

          <div className="skill-card">
            <h3>Express.js</h3>
            <p>Building RESTful APIs with Node.js.</p>
          </div>

          <div className="skill-card">
            <h3>React.js</h3>
            <p>Component-based frontend development.</p>
          </div>

          <div className="skill-card">
            <h3>Node.js</h3>
            <p>Backend development with JavaScript.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;