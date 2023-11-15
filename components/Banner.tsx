// components/AikidoPreview.js
import Link from "next/link";

const Banner = () => {
  return (
    <div className="flex flex-col  w-full mx-auto x-paddings py-8 mb-8 gradient_blue-purple text-white gap-8">
      <h2 className="heading2">Banner Header</h2>

      <p className="paragraph-regular max-w-3xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <a
        href="/was-ist-aikido"
        className="body-medium text-slate-200 self-end
      hover:underline hover:text-slate-100"
      >
        Go to Page →
      </a>
    </div>
  );
};

export default Banner;
