import React from 'react';
import './About.css';

const About = () => {
    const aboutimg = 'https://images.unsplash.com/photo-1545997281-2cfe4d4b740f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTR8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80';
    return (
        <>
            <div className="container-fluid about-container mb-5">
                <p className="about-title text-dark">About Us</p>
            </div>
            <div className="container mb-5">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-12 p-4">
                        <img src={aboutimg} class="img-fluid shadow-lg" alt="about" />
                    </div>
                    <div className="col-lg-6 col-md-6 col-12 p-4">
                        <p className="fs-1 text-primary mb-5">About Our Company</p>
                        <p className="text-muted">Welcome to the best and most popular kid's toy gallary. Here you can find awesome and finest toys for your loving kid.</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;