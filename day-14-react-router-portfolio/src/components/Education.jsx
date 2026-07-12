import "./Education.css";

const Education = () => {
  return (
    <section className="education-page">

      <div className="education-container">

        <h1>Education</h1>

        <p className="education-text">
          My academic journey and continuous learning in technology.
        </p>

        <div className="timeline">

          <div className="timeline-item">
            <div className="circle"></div>

            <div className="timeline-content">
              <h3>Bachelor of Computer Applications (BCA)</h3>
              <h4>Pt. Deen Dayal Upadhyay Management College</h4>
              <h4>Affiliated to Chaudhary Charan Singh University, Meerut</h4>
              <span>2024 - Present</span>

              <p>
                Pursuing BCA with a strong interest in Web Development,
                Programming and Software Development.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="circle"></div>

            <div className="timeline-content">
              <h3>MERN Stack Training</h3>
              <h4>AppSquadz, Noida</h4>
              <span>2026</span>

              <p>
                Learning HTML, CSS, JavaScript, React.js,
                Node.js, Express.js and MongoDB through
                professional training.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="circle"></div>

            <div className="timeline-content">
              <h3>Python Programming</h3>
              <h4>AI For Techies</h4>
              <span>2026</span>

              <p>
                Learning Python fundamentals with practical
                programming and problem-solving.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="circle"></div>

            <div className="timeline-content">
              <h3>Higher Secondary Education (CBSE - Class XII [PCM])</h3>
              <h4>Meerut Public School for Girls</h4>
              <span>2023 – 2024</span>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
};

export default Education;