import React from "react";

/**
 * Footer component for the portfolio website.
 * Displays copyright information and social media links.
 */
const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    {/* Left side: Copyright information */}
                    <div className="col-lg-6 col-12 text-lg-start text-center mb-2 mb-lg-0">
                        <p className="small mb-0">
                            NATHAN KEEN 2024 | All RIGHTS RESERVED &copy; 
                        </p>
                    </div>
                    {/* Right side: Social media links */}
                    <div className="col-lg-6 col-12 text-lg-end text-center d-flex align-items-center justify-content-center justify-content-lg-end">
                        <p className="small mb-1 me-2 mb-0">Let's Connect</p>
                        <a href="https://www.linkedin.com/in/nathan-keen-developer/" target="_blank" rel="noopener noreferrer">
                            <img src="assets/linkedin (1).jpeg" alt="LinkedIn Icon" className="social-icon" loading="lazy"/>
                        </a>
                        <a href="https://github.com/keennathan" target="_blank" rel="noopener noreferrer">
                            <img src="assets/github (1).jpeg" alt="GitHub Icon" className="social-icon" loading="lazy"/>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;