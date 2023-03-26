import Image from "next/image";
import React from "react";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import propertyImage from "../public/assets/projects/somosMas-image.png";

const somosMas = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={propertyImage}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Somos Mas ONG</h2>
          <h3>ReactJS | NodeJs | CSS Frameworks | Sequelize </h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
          This application was built with ReactJS, NodeJS and Sequelize (PSQL) as main technologies.
          The purpose of this project is to visualize the different activities performed by an ONG (Somos Mas).
          The application has the ability to view information about the NGO, as well as news about their latest movements and testimonials of people who received help from Somos Mas. This app has an administrator panel in which it is possible to manage the different sections of the page, in addition to a form to enter or register on the page.
          </p>
          <Link
            href="https://github.com/AhrensOG/OT289-client"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </Link>
          <Link href="https://somosmasong.vercel.app/">
            <button className="px-8 py-2 mt-4">Demo</button>
          </Link>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> NodeJS | Express
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> AWS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> JWT
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> ReactJS | Redux
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> CSS3 | Bootstrap
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default somosMas;
