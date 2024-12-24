import React from "react";

const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: "smooth" });
    }   
};

const Navbar = () => {
    return (
        <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
            <ul className="nav">
                <div className="navbar-brand ms-3">
                    Nathan Keen, Graduate Fullstack Developer
                </div>
                <li className="nav-item">
                    <button type="button" className="nav-link btn btn-secondary btn-lg" onClick={() => handleScroll("home")}>
                        Home
                    </button>
                </li>
                <li className="nav-item">
                    <button type="button" className="nav-link btn btn-secondary" onClick={() => handleScroll("about")}>
                        About
                    </button>
                </li>
                <li className="nav-item">
                    <button type="button" className="nav-link btn btn-secondary" onClick={() => handleScroll("projects")}>
                        Projects
                    </button>
                </li>
                <li className="nav-item">
                    <button type="button" className="nav-link btn btn-secondary" onClick={() => handleScroll("contact")}>
                        Contact
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;