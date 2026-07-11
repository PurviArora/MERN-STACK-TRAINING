import "./Contact.css";
import Footer from "./Footer";

const Contact = () => {
  return (
    <>
      <section className="contact-page">

        <div className="contact-left">

          <h1>Let's Connect</h1>

          <p>
            Feel free to connect with me for internships,
            collaborations, freelance projects, or simply to
            discuss technology and new ideas.
          </p>

          <div className="contact-details">
            <h3>Email</h3>
            <p>2006.purviarora@gmail.com</p>
          </div>

          <div className="contact-details">
            <h3>LinkedIn</h3>
            <p>https://www.linkedin.com/in/arora-purvi-march2006</p>
          </div>

          <div className="contact-details">
            <h3>Location</h3>
            <p>Meerut, Uttar Pradesh</p>
          </div>

        </div>

        <div className="contact-right">

          <form className="contact-form">

            <input
              type="text"
              placeholder="Your Name"
            />

            <input
              type="email"
              placeholder="Your Email"
            />

            <textarea
              rows="6"
              placeholder="Your Message"
            ></textarea>

            <button type="submit">
              Send Message
            </button>

          </form>

        </div>

      </section>

      <Footer />
    </>
  );
};

export default Contact;