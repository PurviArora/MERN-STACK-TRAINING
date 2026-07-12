import { Link } from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Purvi Arora.
        </Link>

        <div className="navbar-nav">
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="/about">About</Link>
          <Link className="nav-link" to="/education">Education</Link>
          <Link className="nav-link" to="/skills">Skills</Link>
          <Link className="nav-link" to="/projects">Projects</Link>
          <Link className="nav-link" to="/github">Github</Link>
          <Link className="nav-link" to="/linkedin">LinkedIn</Link>
          <Link className="nav-link" to="/contact">Contact</Link>
          
        </div>
      </div>
    </nav>
  )
}

export default Navbar;