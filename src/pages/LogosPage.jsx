import {
  ArrowLeftIcon,
  TriangleLeftIcon,
  TriangleRightIcon,
} from "@radix-ui/react-icons";
import {
  Logo1,
  Logo2,
  Logo3,
  Logo4,
  Logo5,
  Logo6,
  Logo7,
  Logo8,
  Logo9,
  Logo10,
  Logo11,
  Logo12,
  Logo13,
  Logo14,
  Logo15,
} from "../utils";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const LogosPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const logos = [
    Logo1,
    Logo2,
    Logo3,
    Logo4,
    Logo5,
    Logo6,
    Logo7,
    Logo8,
    Logo9,
    Logo10,
    Logo11,
    Logo12,
    Logo13,
    Logo14,
    Logo15,
  ];

  const images = logos.map((logo, index) => ({
    id: index + 1,
    src: logo,
    alt: `Image ${index + 1}`,
  }));

  const navigate = useNavigate();
  return (
    <section className="bg-primary px-10 py-10">
      <div className="sticky top-0 right-0 bg-black p-5 flex items-center justify-start text-secondary gap-5 font-inter text-2xl">
        <ArrowLeftIcon className="w-7 h-7 text-ascent" />
        <a className="cursor-pointer" onClick={() => navigate("/")}>
          Back
        </a>
      </div>
      <div className="flex items-center justify-center gap-5 font-inter text-4xl text-secondary p-10">
        <TriangleRightIcon className="w-10 h-10 text-ascent" />
        <p>LOGO PROJECTS</p>
        <TriangleLeftIcon className="w-10 h-10 text-ascent" />
      </div>
      <div className="grid grid-cols-2 gap-4">
        {images.map((image) => (
          <div key={image.id} className="w-full bg-white shadow-md">
            <img
              src={image.src}
              alt={image.alt}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default LogosPage;
