import React from "react";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
    return (
        <nav className="navbar border-bottom border-body" data-bs-theme="dark">
            <div className="container">
                <div className="navbar-brand ms-3">
                    Nathan Keen,<br /> 
                    Graduate Fullstack Developer
                </div>
                <ul className="nav mx-auto">
                    <li className="nav-item">
                        <ScrollLink 
                            to="home" 
                            smooth={true} 
                            duration={500} 
                            className="nav-link btn btn-secondary btn-lg"
                        >
                            Home
                        </ScrollLink>
                    </li>
                    <li className="nav-item">
                        <ScrollLink 
                            to="about" 
                            smooth={true} 
                            duration={500} 
                            className="nav-link btn btn-secondary"
                        >
                            About
                        </ScrollLink>
                    </li>
                    <li className="nav-item">
                        <ScrollLink 
                            to="projects" 
                            smooth={true} 
                            duration={500} 
                            className="nav-link btn btn-secondary"
                        >
                            Projects
                        </ScrollLink>
                    </li>
                    <li className="nav-item">
                        <ScrollLink 
                            to="contact" 
                            smooth={true} 
                            duration={500} 
                            className="nav-link btn btn-secondary"
                        >
                            Contact
                        </ScrollLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;