import {
  ArrowLeftIcon,
  TriangleLeftIcon,
  TriangleRightIcon,
} from "@radix-ui/react-icons";
import {
  Post1,
  Post2,
  Post3,
  Post4,
  Post5,
  Post6,
  Post7,
  Post8,
  Post9,
  Post10,
  Post11,
  Post12,
  Post13,
  Post14,
  Post15,
  Post16,
  Post17,
  Post18,
  Post19,
  Post20,
  Post21,
  Post22,
  Post23,
  Post24,
  Post25,
  Post26,
} from "../utils"; // Update the import paths to match your post images
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const PostsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top on component mount
  }, []);

  const posts = [
    Post1,
    Post2,
    Post3,
    Post4,
    Post5,
    Post6,
    Post7,
    Post8,
    Post9,
    Post10,
    Post11,
    Post12,
    Post13,
    Post14,
    Post15,
    Post16,
    Post17,
    Post18,
    Post19,
    Post20,
    Post21,
    Post22,
    Post23,
    Post24,
    Post25,
    Post26,
  ];

  const images = posts.map((post, index) => ({
    id: index + 1,
    src: post,
    alt: `Post ${index + 1}`,
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
        <p>POST PROJECTS</p>
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

export default PostsPage;
