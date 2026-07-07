import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import AboutMe from './components/AboutMe.jsx'
import Skill from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Education from './components/Education.jsx'
import ContactMe from './components/Contact.jsx'

const App = () => {
    return(
        <>
            <Navbar />
            <Home />
            <AboutMe />
            <Skill />
            <Projects />
            <Education />
            <ContactMe />
        </>
    )
}

export default App;