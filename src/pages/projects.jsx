import React, { useState, useEffect } from "react";
import styles from "../cssModules/projects.module.css";

/**
 * Projects component displays a list of projects with descriptions and links to GitHub repositories.
 * Each project is displayed in a card format with an image, title, description, technologies used, and a link to the GitHub repository.
 */
const Projects = () => {
    const [expandedCard, setExpandedCard] = useState(null);

    /**
     * Handles the click event on a project card to expand or collapse it.
     * Prevents collapsing on mobile if already expanded.
     * @param {number} cardIndex - The index of the card to be expanded or collapsed.
     */
    const handleCardClick = (cardIndex) => {
        if (expandedCard === cardIndex) {
            // On mobile, prevent collapsing if already expanded
            if (window.innerWidth <= 768) {
                return;
            }
            setExpandedCard(null); // Allow collapse for larger screens
        } else {
            setExpandedCard(cardIndex);
        }
    };

    /**
     * useEffect hook to add intersection observer for project cards.
     * Adds 'visible' class when the card is in the viewport.
     */
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

        const elements = document.querySelectorAll(`.${styles.projectCard}`);
        elements.forEach(element => observer.observe(element));

        return () => {
            elements.forEach(element => observer.unobserve(element));
        };
    }, []);

    return (
        <section id="projects" className={styles.container}>
            <div className={styles.banner}>
                <h2>My Projects</h2>
            </div>
            <div className="row">
                {/* Project 1 */}
                <div className="col-md-6">
                    <div 
                        className={`card mb-3 ${styles.projectCard} ${expandedCard === 1 ? styles.expanded : ""}`} 
                        onClick={() => handleCardClick(1)}
                    >
                        <img src="/assets/gameExplorer.png" className="card-img-top" alt="Nathan's 1st portfolio" loading="lazy" />
                        <div className={`card-body ${styles.cardBody}`}>
                            <h5 className="card-title">Game Explorer - A Personalised Game Recommendation App</h5>
                            <p className="card-text">Game Explorer is a web application that helps users discover games tailored to their preferences. Powered by the IGDB API, it allows users to search for games by genre, platform, and ratings, and view detailed information including trailers, screenshots, and reviews.</p>
                            <p className="card-text"><strong>Technologies:</strong> React, React Router, React Context API, Bootstrap, IGDB API, Netlify</p>
                            <ul className="card-text">
                                <li>Search games by genre, platform, and release year.</li>
                                <li>Display trending and top-rated games.</li>
                                <li>View detailed game info such as description, media, and developer details.</li>
                                <li>Responsive design for seamless browsing on desktop and mobile.</li>
                                <li>Save games to your watchlist.</li>
                            </ul>
                            <a href="https://gameexplorer-app.netlify.app" className="btn btn-outline-primary mt-3" target="_blank">View Website</a>
                            <a href="https://github.com/keennathan/game-explorer" className="btn btn-outline-primary mt-3" target="_blank">View GitHub</a>
                        </div>
                    </div>
                </div>
                {/* Project 2 */}
                <div className="col-md-6">
                    <div 
                        className={`card mb-3 ${styles.projectCard} ${expandedCard === 2 ? styles.expanded : ""}`} 
                        onClick={() => handleCardClick(2)}
                    >
                        <img src="/assets/loginUser.png" className="card-img-top" alt="Blogger Platform API Webserver" loading="lazy" />
                        <div className={`card-body ${styles.cardBody}`}>
                            <h5 className="card-title">Blogger Platform API Webserver</h5>
                            <p className="card-text">Developed a RESTful API for a blogging platform, complete with role-based authentication and content management.</p>
                            <p className="card-text"><strong>Technologies:</strong> Python, Flask, PostgreSQL, SQLAlchemy</p>
                            <ul className="card-text">
                                <li>JWT Authentication with RBAC</li>
                                <li>CRUD for blogs, comments, and categories</li>
                                <li>Media uploads for posts</li>
                            </ul>
                            <a href="https://github.com/keennathan/T2A2-Blogger-platform" className="btn btn-outline-primary mt-3" target="_blank">View On GitHub</a>
                        </div>
                    </div>
                </div>
                {/* Project 3 */}
                <div className="col-md-6">
                    <div 
                        className={`card mb-3 ${styles.projectCard} ${expandedCard === 3 ? styles.expanded : ""}`} 
                        onClick={() => handleCardClick(3)}
                    >
                        <img src="/assets/rugbyLeague.png" className="card-img-top" alt="Rugby League Results Tracker" loading="lazy" />
                        <div className={`card-body ${styles.cardBody}`}>
                            <h5 className="card-title">Rugby League Results Tracker</h5>
                            <p className="card-text">Built a Python terminal application to manage rugby league results, calculate stats, and display interactive menus.</p>
                            <p className="card-text"><strong>Technologies:</strong> Python, JSON</p>
                            <ul className="card-text">
                                <li>Persistent data storage using JSON</li>
                                <li>Top-scoring team calculations</li>
                                <li>Intuitive command-line interface</li>
                            </ul>
                            <a href="https://github.com/keennathan/Rugby-leaugue-results-T1A3" className="btn btn-outline-primary mt-3" target="_blank">View On GitHub</a>
                        </div>
                    </div>
                </div>
                {/* Project 4 */}
                <div className="col-md-6">
                    <div 
                        className={`card mb-3 ${styles.projectCard} ${expandedCard === 4 ? styles.expanded : ""}`} 
                        onClick={() => handleCardClick(4)}
                    >
                        <img src="/assets/portfolioBasic.png" className="card-img-top" alt="Nathan's 1st portfolio" loading="lazy" />
                        <div className={`card-body ${styles.cardBody}`}>
                            <h5 className="card-title">First Portfolio Website</h5>
                            <p className="card-text">Designed and deployed a responsive portfolio website to showcase my skills and projects.</p>
                            <p className="card-text"><strong>Technologies:</strong> HTML, CSS, Figma, Netlify</p>
                            <ul className="card-text">
                                <li>Interactive navigation and project showcases</li>
                                <li>Mobile-first responsive design</li>
                            </ul>
                            <a href="https://github.com/keennathan/2024-apr-std-portfolio-T1A2" className="btn btn-outline-primary mt-3" target="_blank">View On GitHub</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* Link to GitHub repository for this website */}
            <div className="text-center mt-2 mb-3">
                <a href="https://github.com/keennathan/react-portfolio" className="btn btn-outline-primary" target="_blank">View Code for This Website</a>
            </div>
        </section>
    );
}

export default Projects;