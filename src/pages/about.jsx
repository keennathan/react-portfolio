import React from "react";
import styles from "../cssModules/about.module.css";

const About = () => {
    return (
        <section id="about" className={styles.container}>
            <div className={styles.content}>
                <h1>About Me</h1>
                    <div className={styles.introduction}>
                        <h2>Introduction:</h2>
                        <p>I'm Nathan Keen, a motivated and adaptable graduate full-stack developer with a knack for solving complex problems and creating meaningful user experiences. My journey into technology has been driven by a deep curiosity for innovation and a desire to bring ideas to life through code.</p>
                        <img className={styles.aboutImage} src="public/assets/intro.jpeg" alt="computer phones on tech background" />
                    </div>
                    <div className="skills">
                        <h2>Skills Overview:</h2>
                        <ul>
                            <li><strong>Front-End Expertise: </strong>Responsive design, React, and intuitive UI/UX.</li>
                            <li><strong>Back-End Proficiency: </strong>RESTful APIs, secure authentication, and database management.</li>
                            <li><strong>Soft Skills: </strong>Effective communicator, team collaborator, and problem solver.</li>
                        </ul>
                        {/* <img className="skillsImage" src="public/assets/AdobeStock_1104893581_resized.jpeg" alt="" /> */}
                    </div>  
                    <div className="more">
                        <h2>More About Me:</h2>
                        <p>When I'm not coding, I enjoy exploring new technologies, refining my skills, and staying up-to-date with industry trends. My diverse professional background has instilled in me a strong work ethic, attention to detail, and the ability to thrive under pressure.</p>
                    </div>
                    <a href="public/assets/Resume Nathan Keen.pdf" className="btn btn-primary" target="_blank" rel="noopener">My Resume</a>
            </div>
        </section>
    );
}

export default About;