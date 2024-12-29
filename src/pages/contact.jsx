import React from "react";
import styles from "../cssModules/contact.module.css";  

const Contact = () => {
  return (
    <section id="contact" className={styles.container}>
      <h2 className="text-center">Contact Page</h2>
      <h3 className="text-center">Let’s Build Something Great Together!</h3>
      <p className="text-center">
        I’d love to hear from you! Whether you have a project in mind, need help solving a problem, or just want to connect, feel free to reach out.
      </p>
      <div className="contact-info">
        <p>LinkedIn: <a href="https://www.linkedin.com/in/nathan-keen-developer/" target="_blank" rel="noopener noreferrer">linkedin.com/in/nathankeen-developer</a></p>
        <p>GitHub: <a href="https://github.com/keennathan" target="_blank" rel="noopener noreferrer">github.com/keennathan</a></p>
      </div>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" placeholder="Your Name" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" placeholder="Your Email"/>
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea className="form-control" id="message" rows="3" placeholder="Leave your message here"></textarea>
        </div>
        <button type="submit" className="btn btn-outline-primary">Submit</button>
      </form>
    </section>
  );
};

export default Contact;