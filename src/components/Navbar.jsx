// import { useLocation, useNavigate } from "react-router-dom";
import { mainLogo } from "../utils";

const Navbar = () => {
  const handleScrollToLogos = () => {
    const logosSection = document.getElementById("projects");
    if (logosSection) {
      logosSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleScrollToarts = () => {
    const logosSection = document.getElementById("arts");
    if (logosSection) {
      logosSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleScrollToskill = () => {
    const logosSection = document.getElementById("skill");
    if (logosSection) {
      logosSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleScrollTocontact = () => {
    const logosSection = document.getElementById("contact");
    if (logosSection) {
      logosSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="bg-primary w-full py-5 sm:px-5 px-5 flex justify-between items-center top-0 right-0 sticky">
      <nav className="flex w-full screen-max-width justify-between">
        <div className="flex items-center justify-start">
          <img src={mainLogo} alt="Logo" className="cursor-pointer w-10 h-10" />
        </div>
        <div className="flex items-center justify-end max-sm:hidden gap-10 w-full">
          <div
            onClick={handleScrollToLogos}
            className={`px-5 text-lg cursor-pointer text-zinc-400 font-inter font-medium transition-all duration-500 hover:text-ascent`}
          >
            Projects
          </div>
          <div
            onClick={handleScrollToarts}
            className={`px-5 text-lg cursor-pointer text-zinc-400 font-inter font-medium transition-all duration-500 hover:text-ascent`}
          >
            Arts
          </div>
          <div
            onClick={handleScrollToskill}
            className={`px-5 text-lg cursor-pointer text-zinc-400 font-inter font-medium transition-all duration-500 hover:text-ascent`}
          >
            Skills
          </div>
          <div
            onClick={handleScrollTocontact}
            className={`px-5 text-lg cursor-pointer text-zinc-400 font-inter font-medium transition-all duration-500 hover:text-ascent`}
          >
            Contact
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
