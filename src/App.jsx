import Header from "./components/1.header/header";
import Hero from "./components/2.hero/hero";
import Experience from "./components/3.experience/experience";
import Projects from "./components/4.project/project";
import CEO_message from "./components/5.CEO_message/CEO_message";
import Contact from "./components/6.contact/contact";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Projects />
      <Experience />
      <CEO_message />
      <Contact />
    </>
  );
}
export default App;