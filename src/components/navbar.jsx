import React from "react";
import { Link as ScrollLink } from "react-scroll";

/**
 * Navbar component for the portfolio website.
 * Provides navigation links to different sections of the page.
 */
const Navbar = () => {
    /**
     * Handles the click event on navigation links.
     * Collapses the navbar if it is currently expanded.
     */
    const handleNavLinkClick = () => {
        const navbarCollapse = document.getElementById('navbarNav');
        if (navbarCollapse.classList.contains('show')) {
            navbarCollapse.classList.remove('show');
        }
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
            <div className="container">
                <div className="navbar-brand">
                    Nathan Keen,<br /> 
                    Graduate Fullstack Developer
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <ScrollLink 
                                to="home" 
                                smooth={true} 
                                duration={500} 
                                className="nav-link"
                                onClick={handleNavLinkClick}
                                offset={-70} 
                            >
                                Home
                            </ScrollLink>
                        </li>
                        <li className="nav-item">
                            <ScrollLink 
                                to="about" 
                                smooth={true} 
                                duration={500} 
                                className="nav-link"
                                onClick={handleNavLinkClick}
                                offset={-70} 
                            >
                                About
                            </ScrollLink>
                        </li>
                        <li className="nav-item">
                            <ScrollLink 
                                to="projects" 
                                smooth={true} 
                                duration={500} 
                                className="nav-link"
                                onClick={handleNavLinkClick}
                                offset={-70} 
                            >
                                Projects
                            </ScrollLink>
                        </li>
                        <li className="nav-item">
                            <ScrollLink 
                                to="contact" 
                                smooth={true} 
                                duration={500} 
                                className="nav-link"
                                onClick={handleNavLinkClick}
                                offset={-70} 
                            >
                                Contact
                            </ScrollLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;