import "./experience.css";

const Experience =() => { return (
    <div className="experience-section" id="experience">
    <h1>Employement experience</h1>
    <section className="experiences">
        
        <div className="experience">
        <a href="https://www.bogdbank.com/" target="blank"><h2>Bogd bank</h2> </a>
        <p>Position: Database admin</p>
        <p>Database management, data backup, and recovery, database performance tuning. Creatign and organizing reports for customers and other departments within the company</p>
        </div>
        
        <div className="experience">
        <a href="https://m-election.mn/" target="blank"> <h2>General Election Commission of Mongolia</h2></a>
        <p>Position: HW engineer</p>
        <p>Organize electoral operations and conduct election system training in the assigned province.</p>
        </div>
        <div className="experience">
        <a href="#home" target="blank"><h2>EEIBC international business center</h2></a>
        <p>Position: Server admin</p>
        <p>Installing ip devices/ip camera, registration automatic door/ and System monitoring Email, network, video conference system server</p>
        </div>
        </section>
        </div> );}
export default Experience;