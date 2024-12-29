import React, { useState } from "react";
import styles from "../cssModules/projects.module.css";

const Projects = () => {
    const [expandedCard, setExpandedCard] = useState(null);

    const handleCardClick = (cardIndex) => {
        setExpandedCard(expandedCard === cardIndex ? null : cardIndex);
    };

    return (
        <section id="projects" className='container'>
             <div className={styles.banner}>
                <h2>Projects</h2>
            </div>
            <div className="row">
            <div className="col-md-6">
                    <div 
                        className={`card mb-3 ${styles.projectCard} ${expandedCard === 2 ? styles.expanded : ""}`} 
                        onClick={() => handleCardClick(2)}
                    >
                        <img src="/assets/gameExplorer.png" className="card-img-top" alt="Nathan's 1st portfolio" />
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
                <div className="col-md-6">
                    <div 
                        className={`card mb-3 ${styles.projectCard} ${expandedCard === 1 ? styles.expanded : ""}`} 
                        onClick={() => handleCardClick(1)}
                    >
                        <img src="/assets/loginUser.png" className="card-img-top" alt="Blogger Platform API Webserver" />
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
                <div className="col-md-6">
                    <div 
                        className={`card mb-3 ${styles.projectCard} ${expandedCard === 2 ? styles.expanded : ""}`} 
                        onClick={() => handleCardClick(2)}
                    >
                        <img src="/assets/rugbyLeague.png" className="card-img-top" alt="Rugby League Results Tracker" />
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
                <div className="col-md-6">
                    <div 
                        className={`card mb-3 ${styles.projectCard} ${expandedCard === 2 ? styles.expanded : ""}`} 
                        onClick={() => handleCardClick(2)}
                    >
                        <img src="/assets/portfolioBasic.png" className="card-img-top" alt="Nathan's 1st portfolio" />
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
        </section>
    );
}

export default Projects;