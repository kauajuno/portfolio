import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import ContactCard from "../../components/Card/ContactCard";
import "./contact.css";

const Contact = () => {
  return (
    <section id="contact-section">
      <ContactCard
        link="https://github.com/kauajuno"
        buttonText="GitHub"
        buttonIcon={faGithub}
      />
      <ContactCard
        link="mailto:kauajuno@gmail.com"
        buttonText="E-mail"
        buttonIcon={faEnvelope}
      />
      <ContactCard
        link="https://wa.me/5562995229200"
        buttonText="WhatsApp"
        buttonIcon={faWhatsapp}
      />
    </section>
  );
};

export default Contact;
