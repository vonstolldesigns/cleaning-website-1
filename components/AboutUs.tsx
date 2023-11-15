import React from "react";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div id="aboutus" className="flex flex-col  paddings flex-center">
      <div className="flex flex-col  lg:flex-row items-center   ">
        {/* Image Section */}
        <div className="relative rounded-lg h-[350px] sm:h-[500px] w-[80%] lg:w-[40%] max-w-[80%] mx-auto  mb-8 lg:mb-0">
          <Image
            src="/next.svg"
            alt="about us image"
            layout="fill"
            objectFit="cover"
            objectPosition="75% 75%"
            className=" rounded-lg "
          />
        </div>

        {/* Text Section */}
        <div className="lg:w-1/2 lg:pl-8 flex flex-col mx-8">
          <div className="flex flex-col">
            <div className="">
              <h3 className="heading2 mb-4">About Us</h3>

              <p className="paragraph-regular  text-gray-700 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
          <div className=" mt-8">
            <h3 className="heading3 mb-4">Sub-Header</h3>
            <div className="paragraph-regular">
              <p className=" text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="my-4 font-light flex flex-col gap-2 bg-slate-100 hover:bg-slate-200 border border-slate-400 shadow-lg rounded-lg w-fit px-4 py-2">
                <p>Card info1</p>

                <p>Card info2</p>
              </div>
              <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className=" mx-8 mt-32">
          <h3 className="heading2 mb-4">About Us - Second Header</h3>

          <p className="paragraph-regular  text-gray-700 mb-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. <br />
          </p>
          <p className="paragraph-regular  text-gray-700 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>

          <h3 className="heading3 mb-4 mt-8">Contact</h3>

          <p className="paragraph-regular text-gray-700 mb-4">
            Phone: 0000 000 000 –{" "}
            <a
              href="mailto:mail@aikido-jiyukan.de"
              className="text-sky-600 hover:underline"
            >
              email@email.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
