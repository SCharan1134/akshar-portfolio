import { TriangleRightIcon } from "@radix-ui/react-icons";
import { SiAdobeillustrator, SiCanva } from "react-icons/si";
import { IoLogoFigma } from "react-icons/io5";

const Skills = () => {
  return (
    <section className="w-full bg-primary">
      <div className="px-10 py-20">
        <div className="flex items-center p-1">
          <TriangleRightIcon className="w-10 h-10  text-ascent" />
          <TriangleRightIcon className="w-10 h-10  text-ascent" />
          <p className="text-secondary font-inter text-2xl">SKILLS</p>
        </div>

        <div className="w-full flex items-center justify-center mt-10 gap-5">
          <SiAdobeillustrator className="text-ascent w-14 h-14" />
          <SiCanva className="text-ascent w-14 h-14" />
          <IoLogoFigma className="text-ascent w-14 h-14" />
        </div>
      </div>
    </section>
  );
};

export default Skills;
