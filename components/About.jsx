import React from "react";
import Link from "next/link";
import Image from "next/image";

const About = () => {
  return (
    <div className="w-full md:h-screen p-2 flex items-center py-16">
      <div className=" max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-2">Who I am</h2>
          <p className="py-2 text-gray-600">
            / / I am not your average developer
          </p>
          <p className="py-2 text-gray-600">
            I'm a young Systems Engineering student and web developer. I can
            stand out for loving my professional career. In 2020 I started this
            incredible journey of perseverance and discipline, which from the
            beginning has filled me with satisfaction and pride to see the
            evolution of my professional profile!
          </p>
          <p className="py-2 text-gray-600">
            I enthusiastically wish to join projects of various types, whether
            short, medium or long term, to reinforce my knowledge and acquire
            even more!
          </p>
          <p className="py-2 text-gray-600">
            I consider myself a person with good communication skills,
            empathetic, with emotional intelligence, self-taught, perseverant
            and capable of solving problems. Always predisposed to collaborate,
            willing to learn and keep improving as a professional.
          </p>
          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <img
            className="rounded-xl"
            src="https://raw.githubusercontent.com/fireclint/portfolio-nextjs/main/public/assets/about.jpg"
            alt="img"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
