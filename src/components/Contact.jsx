import { TriangleRightIcon } from "@radix-ui/react-icons";
import { IoIosMail } from "react-icons/io";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa6";

const Contact = () => {
  return (
    <section className="w-full bg-primary">
      <div className="px-10 py-20">
        <div className="flex items-center p-1">
          <TriangleRightIcon className="w-10 h-10  text-ascent" />
          <TriangleRightIcon className="w-10 h-10  text-ascent" />
          <p className="text-secondary font-inter text-2xl">CONTACTS</p>
        </div>

        <div className="w-full flex flex-col items-start justify-center mt-10 gap-5">
          <div className="flex items-center gap-5">
            <IoIosMail className="text-ascent w-14 h-14" />
            <p className="text-2xl text-secondary font-inter">
              namalaaksharpavan@gmail.com
            </p>
          </div>
          <div className="flex items-center gap-5">
            <BiLogoInstagramAlt className="text-ascent w-14 h-14" />
            <a
              href="https://www.instagram.com/letter"
              className="text-2xl text-secondary font-inter"
            >
              @Letter
            </a>
          </div>
          <div className="flex items-center gap-5">
            <FaLinkedin className="text-ascent w-14 h-14" />
            <a
              href="https://www.linkedin.com/in/akshar-pavan-b452036b/"
              className="text-2xl text-secondary font-inter"
            >
              @Akshar Pavan
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
