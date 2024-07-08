import { ArrowRightIcon, TriangleRightIcon } from "@radix-ui/react-icons";
import { Post13, Post14, Post16, Post22 } from "../utils";
import { useNavigate } from "react-router-dom";

const Posts = () => {
  const navigate = useNavigate();
  return (
    <section className="w-full bg-primary">
      <div className="px-10 py-20">
        <div className="flex items-center p-1">
          <TriangleRightIcon className="w-10 h-10  text-ascent" />
          <TriangleRightIcon className="w-10 h-10  text-ascent" />
          <p className="text-secondary font-inter text-2xl">
            SOCIAL MEDIA CREATIVES
          </p>
        </div>
        <div className="mt-5 grid grid-cols-2 gap-4">
          <img
            src={Post16}
            alt="Logo 1"
            className="w-full h-auto object-cover rounded-lg"
          />
          <img
            src={Post14}
            alt="Logo 2"
            className="w-full h-auto object-cover rounded-lg"
          />
          <img
            src={Post22}
            alt="Logo 3"
            className="w-full h-auto object-cover rounded-lg"
          />
          <img
            src={Post13}
            alt="Logo 4"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
        <div className="w-full flex items-center justify-center mt-10">
          <a
            className="cursor-pointer font-inter text-white text-2xl flex items-center justify-center gap-2"
            onClick={() => {
              navigate("/posts");
            }}
          >
            View all{" "}
            <span>
              <ArrowRightIcon className="w-7 h-7 text-ascent" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Posts;
