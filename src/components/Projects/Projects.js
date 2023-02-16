import React from "react";
import ProjectCard from "./ProjectCard.js";
import Link from "../UI/Link.js";

import rpslsPic from "../../assets/projectpics/rpsls.webp";
import gameoflifePic from "../../assets/projectpics/gameoflife.webp";
import gesturecontrolPic from "../../assets/projectpics/gesturecontrol.webp";

const DUMMY = [
  {
    id: 1,
    project: "RPSLS GAME",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
    image: rpslsPic,
    github: "https://github.com/Avinier/RPSLS-Game",
    link: "https://rpslsreact.netlify.app/",
  },
  {
    id: 2,
    project: "game of life",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
    image: gameoflifePic,
    github: "https://github.com/Avinier/Game-of-Life",
    link: "https://gameoflifex.netlify.app/",
  },
  {
    id: 3,
    project: "GESTURES CONTROL",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
    image: gesturecontrolPic,
    github: "hgithubttps://github.com/Avinier/Gesture-Control-App",
    link: "https://www.youtube.com/watch?v=UyBYr8Ke0qA",
  },
  {
    id: 4,
    project: "game of life",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
    image: gameoflifePic,
    github: "https://github.com/Avinier/Game-of-Life",
    link: "https://gameoflifex.netlify.app/",
  },
  {
    id: 5,
    project: "GESTURES CONTROL",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
    image: gesturecontrolPic,
    github: "hgithubttps://github.com/Avinier/Gesture-Control-App",
    link: "https://www.youtube.com/watch?v=UyBYr8Ke0qA",
  },
  {
    id: 6,
    project: "RPSLS GAME",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
    image: rpslsPic,
    github: "https://github.com/Avinier/RPSLS-Game",
    link: "https://rpslsreact.netlify.app/",
  },
];
export default function Project(props) {
  return (
    <section className="min-[768px]:mx-[80px] dark:font-medium">
      <h2 className="font-title font-black text-[6rem] text-center text-secondary dark:text-secondary--light max-[786px]:text-[4rem] max-[786px]:ml-[40px]">
        My Projects
      </h2>
      <p className="font-content text-center text-slate-50 dark:text-slate-700 text-[18px] max-[786px]:w-fit max-[786px]:ml-[40px] max-[786px]:mr-[10px]">
        From Web-Dev to ML, have played with several tech stacks. Can checkout
        all of my projects{" "}
        <Link isHref={true} href="https://github.com/Avinier">
          here
        </Link>
      </p>
      <div className="grid grid-cols-3 gap-y-[20px] w-[60%] pt-[20px] mx-auto">
        {DUMMY.map((item) => {
          return (
            <ProjectCard
              key={item.id}
              name={item.project}
              desc={item.desc}
              pic={item.image}
              link={item.link}
              github={item.github}
              stack={item.techstack}
              dark={props.isDark}
            />
          );
        })}
      </div>
    </section>
  );
}
