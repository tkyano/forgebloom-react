import "../../css/components/about/ContactForm.css";
import {useState} from "react";

const ContactForm = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <section id="contact-section">
      <h2 id="contact-heading">Get in Touch</h2>
      <p id="contact-description">
        Have questions or comments? Fill out the form below and we’ll get back to you soon.
      </p>

      <form id="contact-form" onSubmit={onSubmit}>
        <p>
          <label htmlFor="contact-name">Name</label>
          <input type="text" id="contact-name" name="name" required />
        </p>

        <p>
          <label htmlFor="contact-email">Email</label>
          <input type="email" id="contact-email" name="email" required />
        </p>

        <p>
          <label htmlFor="contact-message">Message</label>
          <textarea id="contact-message" name="message" required></textarea>
        </p>

        <button id="contact-submit" type="submit">
          Submit Form
        </button>
      </form>

      <div id="contact-result">{result}</div>
    </section>
  );
};


export default ContactForm;