// components/AikidoPreview.js
import Link from "next/link";

const Banner = () => {
  return (
    <div className="flex flex-row justify-between w-[90%] mx-auto x-paddings py-24 px-8 mb-8 gradient_orange text-white gap-8 rounded-3xl">
      <div className="flex-col flex gap-8">
        <h2 className="heading2 ml-12">Experience the difference</h2>

        <p className="paragraph-regular max-w-3xl ml-12">
          Feel free to contact us to establish project details.
        </p>
      </div>
      <div className="flex flex-col items-center gap-6">
        <a
          href="/was-ist-aikido"
          className=" font-light text-slate-200 self-end
      hover:underline hover:text-slate-100"
        >
          <button
            className="bg-white hover:shadow-lg active:shadow-sm text-gray-800 px-16 py-4 rounded-full 
        hover:text-orange transition-all ease-in-out duration-300"
          >
            Get Started
          </button>
        </a>
        <a
          href="/"
          className="text-slate-100 hover:text-slate-200 font-extralight"
        >
          Learn More
        </a>
      </div>
    </div>
  );
};

export default Banner;
