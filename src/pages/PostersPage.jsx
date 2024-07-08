import {
  ArrowLeftIcon,
  TriangleLeftIcon,
  TriangleRightIcon,
} from "@radix-ui/react-icons";
import {
  Poster1,
  Poster2,
  Poster3,
  Poster4,
  Poster5,
  Poster6,
  Poster7,
  Poster8,
  Poster9,
} from "../utils"; // Update the import paths to match your poster images
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const PostersPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const posters = [
    Poster1,
    Poster2,
    Poster3,
    Poster4,
    Poster5,
    Poster6,
    Poster7,
    Poster8,
    Poster9,
  ];

  const images = posters.map((poster, index) => ({
    id: index + 1,
    src: poster,
    alt: `Poster ${index + 1}`,
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
        <p>POSTERS</p>
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

export default PostersPage;
