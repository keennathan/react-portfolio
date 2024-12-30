import React, { useRef, useState, useEffect } from "react";
import styles from "../cssModules/contact.module.css";  
import emailjs from "@emailjs/browser";
import axios from "axios";

const Contact = () => {
  const form = useRef();
  const [formStatus, setFormStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.visible);
        } else {
          entry.target.classList.remove(styles.visible);
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll(`.${styles['intro-section']}, .${styles['contact-info']}, .${styles['form-section']}`);
    elements.forEach(element => observer.observe(element));

    return () => {
      elements.forEach(element => observer.unobserve(element));
    };
  }, []);

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const name = form.current.name.value;
    const email = form.current.email.value;
    const message = form.current.message.value;

    if (!name || !email || !message) {
      setFormStatus("Please fill out all fields.");
      setIsLoading(false);
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setFormStatus("Please enter a valid email address.");
      setIsLoading(false);
      return;
    }

    try {
      const response = await axios.get(`https://emailvalidation.abstractapi.com/v1/?api_key=${import.meta.env.VITE_ABSTRACT_API_KEY}&email=${email}`);
      if (!response.data.is_valid_format.value || !response.data.is_smtp_valid.value) {
        setFormStatus("Please enter a valid email address.");
        setIsLoading(false);
        return;
      }
    } catch (error) {
      console.error(error);
      setFormStatus("Failed to validate email address. Please try again.");
      setIsLoading(false);
      return;
    }

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then((result) => {
        console.log("Email sent:", result.text);
        setFormStatus("Message sent successfully!");
        form.current.reset();
        setIsLoading(false);
    }, (error) => {
        console.log("Email error:", error.text);
        setFormStatus("Failed to send message. Please try again.");
        setIsLoading(false);
    });
  };

  return (
    <section id="contact" className={styles.container}>
      <h2 className={styles.banner}>Contact Me</h2>
      <div className={styles['intro-section']}>
        <h3 className="text-center">Let's Build Something Great Together!</h3>
        <p className="text-center">
          I'd love to hear from you! Whether you have a project in mind, need help solving a problem, or just want to connect, feel free to reach out.
        </p>
      </div>
      <div className={styles['contact-info']}>
        <a href="https://www.linkedin.com/in/nathan-keen-developer/" target="_blank" rel="noopener noreferrer">
          <img src="assets/LinkedInIcon2.png" alt="LinkedIn Icon" className={styles.linkedin} />
        </a>
        <a href="https://github.com/keennathan" target="_blank" rel="noopener noreferrer">
          <img src="assets/GitHubIcon2.png" alt="GitHub Icon" className={styles.github}/>
        </a>
      </div>
      <form ref={form} onSubmit={sendEmail} className={styles['form-section']}>
        <div className={`mb-3 ${styles['input-box']}`}>
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" name="name" placeholder="Your Name" />
        </div>
        <div className={`mb-3 ${styles['input-box']}`}>
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" name="email" placeholder="Your Email"/>
        </div>
        <div className={`mb-3 ${styles['input-box']}`}>
          <label htmlFor="message" className="form-label">Message</label>
          <textarea className="form-control" id="message" name="message" rows="3" placeholder="Leave your message here"></textarea>
        </div>
        <button type="submit" className="btn btn-outline-primary" disabled={isLoading}>
          {isLoading ? "Submitting..." : "Submit"}
        </button>
      </form>
      {formStatus && <p className="text-center mt-3">{formStatus}</p>}
    </section>
  );
};

export default Contact;