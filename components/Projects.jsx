import React from "react";
import portfolioImg from "../public/assets/projects/portfolio-image.png";
import countryImg from '../public/assets/projects/countryApp-image.png'
import henryImg from "../public/assets/projects/henryTravel-image.png";
import newspaper from "../public/assets/projects/NewspaperImage.png";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-2">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem title={"HenryTravel"} image={henryImg} typeProject={"E-Commerce Project with ReactJS, NodeJS and Sequelize"} url={'/henryTravel'} />
          <ProjectItem title={"CountryApp"} image={countryImg} typeProject={"ReactJS Project"} url={'/countryApp'} />
          <ProjectItem title={"My Portfolio :)"} image={portfolioImg} typeProject={"NextJS Project"} url={'/myPortfolio'} />
          <ProjectItem title={"Newspaper"} image={newspaper} typeProject={"NextJS Project with NodeJS and Firebase"} url={'/newspaper'} />
        </div>
      </div>
    </div>
  );
};

export default Projects;
