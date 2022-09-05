import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { TbFileDownload } from "react-icons/tb";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            LET&apos;S BUILD SOMETHING LEGENDARY TOGETHER
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, I&apos;m <span className="text-[#5651e5]">Gabriel</span>
          </h1>
          <h1 className="py-2 text-gray-700">A FullStack Web Developer</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            I&apos;m a Fullstack developer, BackEnd oriented. I have the ability to
            develop both individual and group web projects. I&apos;m focused on
            building exceptional scalable and responsive web applications, while
            learning new FrontEnd and BackEnd technologies.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <a
              href="https://www.linkedin.com/in/ahrensog-fullstack"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn color="#5651e5" />
              </div>
            </a>
            <a
              href="https://github.com/AhrensOG"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub color="#5651e5" />
              </div>
            </a>
            <Link href="/#contact">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineMail color="#5651e5" />
              </div>
            </Link>
            <a href="CV-OGA-C.pdf" download='CV-Gabriel-Ahrens.pdf'>
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <TbFileDownload color="#5651e5" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
