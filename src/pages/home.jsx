import React from "react";
import Typical from "react-typical";
import styles from "../cssModules/home.module.css";

const Home = () => {
    return (
        <section id="home" className="section-home pt-5">
            <div className={styles.content}> 
                <div className={styles.imageContainer}>
                    <img id="profileImage" className={styles.profileImage} src="/assets/profile.JPG" alt="Profile Picture" />
                </div>
                <div className={styles.textContainer}>
                    <h1>
                        <Typical
                            steps={[
                                "Hi, I'm Nathan Keen Graduate Front-End", 1000,
                                "Hi, I'm Nathan Keen Graduate Back-End", 1000,
                                "Hi, I'm Nathan Keen Graduate Full Stack Developer.", 1000
                            ]}
                            loop={1}
                            wrapper="p"
                        />
                    </h1>
                </div>
            </div>
        </section>
    );
}

export default Home;