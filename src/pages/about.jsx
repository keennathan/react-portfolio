import React, { useEffect } from "react";
import styles from "../cssModules/about.module.css";

const About = () => {
    const handleMouseEnter = (e) => {
        e.target.classList.add(styles.pixelated);
    }
    const handleMouseLeave = (e) => {
        e.target.classList.remove(styles.pixelated);
    }

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

        const elements = document.querySelectorAll(`.${styles.introduction}, .${styles.skills}, .${styles.moreAboutMe}`);
        elements.forEach(element => observer.observe(element));

        return () => {
            elements.forEach(element => observer.unobserve(element));
        };
    }, []);

    return (
        <section id="about" className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.banner}>About Me</h1>

                <div className={styles.introduction}>
                    <h2>Introduction:</h2>
                    <p>I'm Nathan Keen, a motivated and adaptable graduate full-stack developer with a knack for solving complex problems and creating meaningful user experiences. My journey into technology has been driven by a deep curiosity for innovation and a desire to bring ideas to life through code.</p>
                    <img className={styles.aboutImage} 
                        src="/assets/intro.jpeg" 
                        alt="computer phones on tech background" 
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    />
                </div>

                <div className={styles.skills}>
                    <h2>Skills Overview:</h2>
                    <ul>
                        <li><strong>Front-End Expertise: </strong>Responsive design, React, and intuitive UI/UX.</li>
                        <li><strong>Back-End Proficiency: </strong>RESTful APIs, secure authentication, and database management.</li>
                        <li><strong>Soft Skills: </strong>Effective communicator, team collaborator, and problem solver.</li>
                    </ul>
                    <img className={styles.aboutImage} 
                        src="/assets/skills.jpeg" 
                        alt="" 
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    />
                </div> 

                <div className={styles.moreAboutMe}>
                    <h2>More About Me:</h2>
                    <p>When I'm not coding, I enjoy exploring new technologies, refining my skills, and staying up-to-date with industry trends. My diverse professional background has instilled in me a strong work ethic, attention to detail, and the ability to thrive under pressure.</p>
                </div>
                <a href="public/assets/Resume Nathan Keen.pdf" className="btn btn-outline-primary mt-3" target="_blank" rel="noopener">My Resume</a>
            </div>
        </section>
    );
}

export default About;