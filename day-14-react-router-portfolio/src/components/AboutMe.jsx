import "./AboutMe.css";
import profile from "../assets/images/purvi (2).jpeg"; // Move your image to src/assets

const AboutMe = () => {
  return (
    <section className="about-page">

      <div className="about-image">
        <img src={profile} alt="Purvi Arora" />
      </div>

      <div className="about-content">

        <h1>About Me</h1>

        <h3>Aspiring MERN Stack Developer</h3>

        <p>
          Hello! I'm <span>Purvi Arora</span>, a BCA student passionate about
          web development and modern technologies. I enjoy building responsive,
          user-friendly websites and continuously expanding my knowledge in
          JavaScript, React, Node.js, Express.js, and MongoDB.
        </p>

        <p>
          My goal is to become a skilled Full Stack Developer while constantly
          improving my problem-solving abilities and creating impactful digital
          experiences.
        </p>

        <div className="about-info">

          <div>
            <strong>Name :</strong> Purvi Arora
          </div>

          <div>
            <strong>Education :</strong> BCA Under-graduate
          </div>

          <div>
            <strong>Location :</strong> Meerut, Uttar Pradesh
          </div>

          <div>
            <strong>Email :</strong> 2006.purviarora@gmail.com
          </div>

        </div>

        <button className="resume-btn">
          Download Resume
        </button>

      </div>

    </section>
  );
};

export default AboutMe;