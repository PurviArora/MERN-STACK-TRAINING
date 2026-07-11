import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <h2 className="footer-logo">Purvi Arora.</h2>

        <p className="footer-text">
          MERN Stack Developer | BCA Student | Passionate about building
          modern and responsive web applications.
        </p>

        <div className="footer-links">
          <a href="https://github.com/PurviArora" target="_blank" rel=""> 
          
            GitHub
          </a>

          <a href="https://linkedin.com/in/arora-purvi-march2006" target="_blank" rel="">
            LinkedIn
          </a>

          <a href="mailto:2006.purviarora@gmail.com">
            Email
          </a>
        </div>

        <hr />

        <p className="copyright">
          © 2026 Purvi Arora. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;