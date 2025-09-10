import "./contact.css";


const Contact = () => {
    return (
        <section className="contact-section" id="contact">
            <div className="contact-div1">
            <img src="/vite.svg" alt="Vite_Logo" className="vite-logo" ></img>
            <h3>Bilguun co.ltd</h3>
            </div>
            <div className="contact-div1">
            <img src="src/components/images/phone-solid-full.svg" alt="contact numbers" className="logo"></img>
            <h3>0809911****, 077 88****</h3>
            </div>
            <div className="contact-div1">
            <img src="src/components/images/envelope-solid-full.svg" alt="email address" className="logo"></img>
            <h3>d.hw10***@gmail.com</h3>
            </div>
            <div className="contact-div1">
            <img src="src/components/images/location-dot-solid-full.svg" alt="address" className="logo"></img>
            <h3>Ulaanbaatar, Mongolia</h3>
            </div>
        </section>
    );}
export default Contact;