import React from "react";
import ProjectCard from "./ProjectCard";
import "./Projects.css";
import imdbPage from "../../Assets/screencapture-imdb-habeeb-3j4xeribg-habeeb8136-vercel-app-2022-12-11-13_43_42.png";
import intaPage from "../../Assets/2022_12_11_13_58_58.png";
import portfolioPage from "../../Assets/screencapture-localhost-3000-2022-12-11-14_09_38.png";
import HkartPage from "../../Assets/screencapture-h-kart-ammrz3skb-habeeb8136-vercel-app-2022-12-11-14_06_06.png";
import fitclanPage from "../../Assets/fitclan.jpg";
const projectData = [
  {
    src: imdbPage,
    title: "IMDb-clone",
    description: "ReactJS,Bootstrap,Redux",
    github: "https://github.com/Habeeb8136/IMDb-Clone",
    deployment: "https://imdb-habeeb-3j4xeribg-habeeb8136.vercel.app/",
  },
  {
    src: intaPage,
    title: "Instagram app",
    description: "React Native",
    github: "https://github.com/Habeeb8136/instagram-app",
    deployment: "",
  },
  {
    src: HkartPage,
    title: "H-kart e-commerce",
    description: "ReactJS,Bootstrap,Redux",
    github: "https://github.com/Habeeb8136/ecommerce-app",
    deployment: "https://h-kart-ammrz3skb-habeeb8136.vercel.app/",
  },
  {
    src: portfolioPage,
    title: "My Portfolio",
    description: "ReactJS",
    github: "https://github.com/Habeeb8136/my-portfolio",
    deployment: "#home",
  },
  {
    src: fitclanPage,
    title: "Fit-Clan Fitness",
    description: "ReactJS,Firebase,Bootstrap,ContextAPI",
    github: "https://github.com/UvaishKhan7/fitClan",
    deployment: "https://fit-clan-lovat.vercel.app",
  }
];

const Projects = () => {
  return (
    <div className="projrctsContainer" id="projects">
      <h1 className="heading">Projects</h1>
      <p>Projects i have been working on</p>
      <div className="projectslist">
        {projectData.map((projects) => {
          return (
            <ProjectCard
              src={projects.src}
              title={projects.title}
              description={projects.description}
              github={projects.github}
              deployment={projects.deployment}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
