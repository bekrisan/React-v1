import React, { useState, useEffect } from "react";
import "./hero.css";

const images = [
    {
        src: 'src/components/images/cons1.jpg',
        title: 'Welcome to My Portfolio',
        subtitle: 'Explore my projects, experience, and more.',
        description: 'This is a description for image 1.',
        link: "#project1"
    },
    {
        src: 'src/components/images/cons2.jpg',
        title: 'Image 2 Title',
        subtitle: 'Image 2 Subtitle',
        description: 'This is a description for image 2.',
        link: "#project2"
    },
    {
        src: 'src/components/images/cons3.png',
        title: 'Image 3 Title',
        subtitle: 'Image 3 Subtitle',
        description: 'This is a description for image 3.',
        link: "#project3"
    },
];

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Change slide every 5 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="hero" id="home">
            <div className="hero-slider">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`hero-slide ${index === currentIndex ? "active" : ""}`}
                        style={{ backgroundImage: `url(${image.src})` }}
                    >
                        <div className="hero-description">
                            <h2>{image.description}</h2>
                            <a href={image.link} className="btn">View Project</a>
                        </div>
                    </div>
                ))}
            
            <div className="hero-dots">
                {images.map((_, index) => (
                    <span
                        key={index} 
                        className={`hero-dot ${index === currentIndex ? "active" : ""}`}
                        onClick={() => setCurrentIndex(index)}
                    ></span>
                ))}
            </div>
            </div>
        </section>
    );
}
export default Hero;