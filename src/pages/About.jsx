import "./../css/pages/About.css";
import Mission from "../components/about/Mission";
import ContactForm from "../components/about/ContactForm"

const About = () => {
  return (
    <main className="about-us-container">
      <Mission />
      <ContactForm />
    </main>
  );
};

export default About;