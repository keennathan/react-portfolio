import React, { useState } from "react";
import styles from "../cssModules/projects.module.css";

const Projects = () => {
    const [expanded, setExpanded] = useState(false);

    const handleCardClick = () => {
        if (window.innerWidth <= 768) { // Mobile screen size
            setExpanded(!expanded);
        }
    };

    return (
        <section id="projects" className="container">
            <h2 className="text-center">Projects</h2>
            <div className="row">
                <div className="col-md-6">
                    <div 
                        className={`card mb-3 ${styles.projectCard} ${expanded ? styles.expanded : ""}`} 
                        onClick={handleCardClick}
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
                            <a href="#" className="btn btn-primary">View Project</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card mb-3">
                        <img src="/assets/techBackground.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Project 2</h5>
                            <p className="card-text">This is a project description.</p>
                            <a href="#" className="btn btn-primary">View Project</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;