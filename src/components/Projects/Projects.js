import React from "react";
import ProjectCard from "./ProjectCard";
import Link from "../UI/Link";

import cppLogo from "../../assets/logos/cpp-logo.png";
import cssLogo from "../../assets/logos/css-logo.png";
import htmlLogo from "../../assets/logos/html-logo.png";

import rpslsPic from "../../assets/projectpics/rpsls.png";
import gameoflifePic from "../../assets/projectpics/gameoflife.png";
import gesturecontrolPic from "../../assets/projectpics/gesturecontrol.png";

const DUMMY = [
  {
    id: 1,
    project: "RPSLS GAME",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
    image: rpslsPic,
    link: "https://github.com/Avinier",
    techstack: [cppLogo, cssLogo, htmlLogo],
  },
  {
    id: 2,
    project: "game of life",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
    image: gameoflifePic,
    link: "https://github.com/Avinier",
    techstack: [cppLogo, cssLogo, htmlLogo],
  },
  {
    id: 3,
    project: "GESTURES CONTROL",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
    image: gesturecontrolPic,
    link: "https://github.com/Avinier",
    techstack: [cppLogo, cssLogo, htmlLogo],
  },
];
export default function Project() {
  return (
    <section>
      <h2 className="font-title font-black text-[5rem] text-secondary dark:text-secondary--light max-[786px]:text-[4rem] ml-[45px]">
        My Projects
      </h2>
      <p className=" ml-[45px] font-content text-slate-50 dark:text-slate-700 text-[18px]">From Web-Dev to ML, have played with several tech stacks. Can checkout all of my projects <Link isHref={true} href="https://github.com/Avinier">here</Link></p>
      <div className="flex justify-around max-[786px]:flex-col">
        {DUMMY.map((item) => {
          return (
            <ProjectCard
              key={item.id}
              name={item.project}
              desc={item.desc}
              pic={item.image}
              link={item.link}
              stack={item.techstack}
            />
          );
        })}
      </div>
    </section>
  );
}
