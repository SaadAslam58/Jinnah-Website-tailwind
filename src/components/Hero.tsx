import React from "react";
import Image from "next/image";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
const Hero = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center w-[90%] h-[80vh] md:flex-row">
        <div className="w-[75%] flex flex-col justify-center md:mt-0 md:w-[50%]">
          <h1 className="item-center mr-5  text-gray-50 font-bold cursor-pointer flex text:md md:text-lg ">
          <FaQuoteLeft className="md:w-3 w-2 mr-1"/>Quote By <FaQuoteRight className="md:w-3 w-2 ml-1"/> <br />
            <span className="text-black md:ml-4  md:text-4xl md:mt-10 mt-8 text-2xl">Quaid-E-Azam</span>
          </h1>
          <p className="text-gray-50 text-xl font-medium cursor-pointer pt-5">
            We are going through fire the sunshine has yet to come. <br /> But I
            have no doubt that with{" "}
            <span className="text-black font-bold transition-shadow duration-300 ease-in-out rounded-md text-shadow-sm text-shadow-neutral-400">
              Unity, Faith and Discipline
            </span>{" "}
            we will compare with any nation of the world.{" "}
          </p>
        </div>
        <div className="w-[60%] md:w-[40%] flex justify-center md:mt-8 mt-10 ">
          <div className="items-center w-full flex justify-center">
            <Image
              className="flex justify-center items-center rounded-3xl transition-shadow  transition-transform duration-300 ease-in-out hover:scale-105 border-1 border-black hover:shadow-2xl hover:shadow-black w-[500] md:w-[300px] md:h-[300] h-[320] "
              src="/Quaid.jpg"
              alt="Jinnah"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
