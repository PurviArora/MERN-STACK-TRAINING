import "./Github.css";

const Github = () => {
  return (
    <div className="github-page">
      <div className="github-card">
        <h1>GitHub Profile</h1>

        <p>
          Explore my repositories, projects, and coding journey on GitHub.
        </p>

        <a
          href="https://github.com/PurviArora"
          target="_blank"
          rel="noopener noreferrer"
          className="github-btn"
        >
          Visit My GitHub
        </a>
      </div>
    </div>
  );
};

export default Github;