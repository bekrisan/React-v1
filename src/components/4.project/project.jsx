import "./project.css";

const Projects = () => { return (
    <section className="projects-section" id="projects">
    <h1>My projects</h1>
    <section className="projects">
        <div className="project">
            <h2>MONGOLIAN HISTORY</h2>
            <h3>link: <a href="https://mongolia.it.com/">https://mongolia.it.com/</a></h3>
            <p>Project introduction: This project got produced for preserve and disseminate the Mongoliaи historical timeline in digital form. </p>
        </div>
        <div className="project">
            <h2>My portfolio</h2> 
            <h3>link: <a href="https://github.com/bekrisan/portfolio/">https://bekrisan.github.io/portfolio/</a></h3>
            <p>Project introduction: This project got produced for introduce myself and my skills. will be included my CV</p>
        </div>
        <div className="project">
            <h2>DB holbootoi project</h2>
            <h3>link: <a href="">holbogdoh link</a></h3>
            <p>Project introduction: This project got produced for practice DB connection and CRUD operation</p>
        </div>
        <div className="project">
            <h2>BIGData holbootoi project</h2>
            <h3>link: <a href="">holbogdoh link</a></h3>
            <p>Project introduction: This project got produced for practice DB connection and logic operation</p>
        </div>
        </section>
    </section>);}
export default Projects;