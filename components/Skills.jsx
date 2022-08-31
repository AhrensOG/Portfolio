import React from "react";
import Image from "next/image";

const Skills = () => {
  const skillsNames = [
    {
      iconName: "html",
      skillName: "HTML",
    },
    {
      iconName: "css",
      skillName: "Css",
    },
    {
      iconName: "js",
      skillName: "JavaScript",
    },
    {
      iconName: "nextjs",
      skillName: "NextJS"
    },
    {
      iconName: "react",
      skillName: "ReactJS",
    },
    {
      iconName: "redux",
      skillName: "Redux",
    },
    {
      iconName: "tailwind",
      skillName: "Tailwind",
    },
    {
      iconName: "nodejs",
      skillName: "Node",
    },
    {
      iconName: "express",
      skillName: "Express",
    },
    {
      iconName: "postgresql",
      skillName: "PostgreSQL",
    },
    {
      iconName: "sequelize",
      skillName: "Sequelize",
    },
    {
      iconName: "mongodb",
      skillName: "MongoDB",
    },
    {
      iconName: "git",
      skillName: "Git",
    },
    {
      iconName: "github",
      skillName: "GitHub",
    },
    {
      iconName: "slack",
      skillName: "Slack",
    },
    {
      iconName: "trello",
      skillName: "Trello",
    },
  ];

  return (
    <div className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4">Who I Can do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {
            skillsNames?.map((s) => (
              <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                <div className="grid grid-cols-2 gap-4 justify-center items-center">
                  <div className="m-auto">
                    <Image
                      src={`/../public/assets/skills/${s.iconName}-icon.png`}
                      alt="/"
                      width="64px"
                      height="64px"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <h3>{s.skillName}</h3>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Skills;
