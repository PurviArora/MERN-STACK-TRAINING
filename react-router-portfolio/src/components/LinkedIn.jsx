import "./LinkedIn.css";

const LinkedIn = () => {
  return (
    <div className="linkedin-page">
      <div className="linkedin-card">
        <h1>LinkedIn Profile</h1>

        <p>
          Connect with me on LinkedIn to explore my professional journey,
          certifications, projects, and career updates.
        </p>

        <a
          href="https://www.linkedin.com/in/arora-purvi-march2006"
          target="_blank"
          rel="noopener noreferrer"
          className="linkedin-btn"
        >
          Visit My LinkedIn
        </a>
      </div>
    </div>
  );
};

export default LinkedIn;