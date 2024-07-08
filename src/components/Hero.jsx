import { ArrowDownIcon } from "@radix-ui/react-icons";

const Hero = () => {
  return (
    <section className="w-full bg-primary  text-secondary">
      <div className="font-inter text-4xl flex flex-col gap-2 px-10">
        <p className="mt-5">Heyy !</p>
        <p>
          This is <span className="text-ascent">Akshar..</span>
        </p>
        <p>Designer</p>
      </div>
      <div className="w-full flex items-center justify-center mt-5">
        <ArrowDownIcon className="w-10 h-10" />
      </div>
    </section>
  );
};

export default Hero;
