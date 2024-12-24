import React from "react";

const Projects = () => {
    return (
        <section id="projects" className="container">
            <h2 className="text-center">Projects</h2>
            <div className="row">
                <div className="col-md-6">
                    <div className="card mb-3">
                        <img src="/assets/techBackground.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Project 1</h5>
                            <p className="card-text">This is a project description.</p>
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