import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="home-content">
        <h1>Hi, I'm <span>Purvi Arora</span></h1>

        <h3>ASPIRING MERN Stack Developer | BCA Student</h3>

        <p>
          Passionate about creating responsive, modern web applications and
          continuously learning new technologies to build impactful digital
          experiences.
        </p>

        <div className="home-buttons">
          <a href="/contact" className="btn-primary">
            Hire Me
          </a>

          <a href="/projects" className="btn-secondary">
            View Projects
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;