import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Logos from "../components/Logos";
import Navbar from "../components/Navbar";
import Posters from "../components/Posters";
import Posts from "../components/Posts";
import Skills from "../components/Skills";

const Homepage = () => {
  return (
    <div className="w-full">
      <Navbar />
      <Hero />
      <div id="projects">
        <Logos />
      </div>
      <Posts />
      <div id="arts">
        <Posters />
      </div>
      <div id="skill">
        <Skills />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default Homepage;
