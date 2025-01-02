import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import styles from "../cssModules/home.module.css";

/**
 * Home component displays the home section of the portfolio.
 * It includes a profile image and a typewriter effect for the developer's roles.
 */
const Home = () => {
    // useTypewriter hook to create a typewriter effect for the developer's roles
    const [text] = useTypewriter({
        words: ["Front-End Developer", "Back-End Developer", "Full Stack Developer"],
        loop: 10, // Number of times to loop through the words
        cursor: true, // Show cursor
        cursorStyle: "|", // Style of the cursor
        typeSpeed: 100, // Speed of typing
        deleteSpeed: 80, // Speed of deleting
        delaySpeed: 2000, // Delay before starting to type the next word
    });

    return (
        <section id="home" className="section-home pt-5">
            <div className={styles.content}>
                <div className={styles.imageContainer}>
                    <img
                        id="profileImage"
                        className={styles.profileImage}
                        src="/assets/profile.JPG"
                        alt="Profile Picture"
                        loading="lazy"
                    />
                </div>
                <div className={styles.textContainer}>
                    <h1>
                        <span>Hi, I'm Nathan Keen </span>
                        <span>I'm a <span style={{color:"blue"}}>{text}</span><Cursor /></span>
                    </h1>
                </div>
            </div>
        </section>
    );
};

export default Home;