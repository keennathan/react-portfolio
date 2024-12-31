import React, { useState, useEffect } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import styles from "../cssModules/home.module.css";

const Home = () => {
    const [text] = useTypewriter({
        words: ["Front-End Developer", "Back-End Developer", "Full Stack Developer"],
        loop: 10,
        cursor: true,
        cursorStyle: "|",
        typeSpeed: 100,
        deleteSpeed: 80,
        delaySpeed: 2000,
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