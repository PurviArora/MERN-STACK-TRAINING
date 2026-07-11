import "./Projects.css";

const Projects = () => {
  return (
    <section className="projects-page">

      <div className="projects-container">

        <h1>My Projects</h1>

        <p className="projects-text">
          A collection of projects that showcase my frontend development skills,
          React learning journey, and UI design experience.
        </p>

        <div className="projects-grid">

          <div className="project-card">
            <h3>🚀 React Portfolio Website</h3>

            <p>
              A modern personal portfolio developed using React, React Router,
              Bootstrap and custom CSS featuring multiple pages with smooth
              navigation and responsive design.
            </p>

            <span>React • React Router • Bootstrap • CSS</span>
          </div>

          <div className="project-card">
            <h3>💼 Frontend Portfolio</h3>

            <p>
              My first personal portfolio built during my frontend journey to
              showcase my skills, projects and achievements using HTML, CSS and
              JavaScript.
            </p>

            <span>HTML • CSS • JavaScript</span>
          </div>

          <div className="project-card">
            <h3>🛒 Product Card UI</h3>

            <p>
              Responsive product cards with quantity selection, price calculation
              and an interactive user interface.
            </p>

            <span>React • Bootstrap • CSS</span>
          </div>

          <div className="project-card">
            <h3>🛍 Amazon Clone</h3>

            <p>
              A responsive clone of Amazon's homepage featuring navigation,
              banners, product sections and a modern shopping interface.
            </p>

            <span>HTML • CSS • Bootstrap</span>
          </div>

          <div className="project-card">
            <h3>🛒 Myntra Clone</h3>

            <p>
              Designed a responsive Myntra-inspired landing page with product
              sections, navigation bar and promotional banners.
            </p>

            <span>HTML • CSS • Bootstrap</span>
          </div>

          <div className="project-card">
            <h3>🔐 Modern Login Page UI</h3>

            <p>
              Designed a modern glassmorphism login page with responsive layout,
              animations and attractive user interface.
            </p>

            <span>HTML • CSS</span>
          </div>

        </div>

      </div>

    </section>
  );
};

export default Projects;