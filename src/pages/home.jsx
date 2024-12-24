import React from "react";

const Home = () => {
    const handleVideoError = (e) => {
        console.error("Error loading video", e);
        alert("There was an error loading the video. Please try again later.");
    };

    return (
        <section id="home" className="section-home pt-5">
            <div className="content"> 
                <h1>Nathan Keen, Graduate Fullstack Developer</h1>
            </div>
        </section>
    );
}

export default Home;