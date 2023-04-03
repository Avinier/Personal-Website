import React, { useState } from "react";
import ProjectCard from "./ProjectCard.js";
import Link from "../UI/Link.js";

import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

import rpslsPic from "../../assets/projectpics/rpsls.webp";
import gameoflifePic from "../../assets/projectpics/gameoflife.webp";
import gesturecontrolPic from "../../assets/projectpics/gesturecontrol.webp";
import eminorPic from "../../assets/projectpics/eminor.webp";
import rcorePic from "../../assets/projectpics/rcore.webp";

const DUMMY = [
  {
    id: 1,
    project: "E-minor NFTs",
    desc: "A tool which creates beautiful ai-generated images out of your favourite song lyrics. Which you can NFT too.",
    image: eminorPic,
    github: "https://github.com/Avinier/E-minor",
    link: "https://e-minor.up.railway.app/",
  },
  {
    id: 2,
    project: "RPSLS GAME",
    desc: "A game inspired by the rock-paper-scissor-lizard-spock game from the TV sitcom 'The Big Bang Theory'",
    image: rpslsPic,
    github: "https://github.com/Avinier/RPSLS-Game",
    link: "https://rpslsreact.netlify.app/",
  },
  {
    id: 3,
    project: "Game of Life",
    desc: "A simulator based on Conoway's Game of Life",
    image: gameoflifePic,
    github: "https://github.com/Avinier/Game-of-Life",
    link: "https://gameoflifex.netlify.app/",
  },
  {
    id: 4,
    project: "Gestures Control App",
    desc: "A computer vision app which does several functions on specific hand gestures",
    image: gesturecontrolPic,
    github: "hgithubttps://github.com/Avinier/Gesture-Control-App",
    link: "https://www.youtube.com/watch?v=UyBYr8Ke0qA",
  },
  {
    id: 5,
    project: "RCore Minecraft Plugins",
    desc: "Worked on the frontend and middleware of this project",
    image: rcorePic,
    github: "https://github.com/Avinier/RCore-WebBase",
    link: "#",
  },
  {
    id: 6,
    project: "Adani Stocks Predictor",
    desc: "An ML model to predict the stock price of Adani Enterprises",
    image: gesturecontrolPic,
    github: "https://github.com/Avinier/Gesture-Control-App",
    link: "https://www.youtube.com/watch?v=UyBYr8Ke0qA",
  },
];
export default function Project(props) {
  const isBigScreen = useMediaQuery({ query: "(min-width: 768px)" });

  const [animate, setAnimate] = useState(() => {
    if (isBigScreen) return true;
    else return false;
  });

  const projectMobileVer = `max-[768px]:flex max-[768px]:flex-col max-[768px]:w-[90%]`;

  return (
    <section className="min-[768px]:mx-[80px] dark:font-medium">
      <h1 className="text-[6rem] text-center text-secondary dark:text-secondary--light max-[786px]:text-[4rem] max-[786px]:ml-[40px]">
        My Projects
      </h1>
      <p className="text-center text-slate-50 dark:text-slate-700 text-[18px] max-[786px]:w-fit max-[786px]:ml-[40px] max-[786px]:mr-[10px]">
        From Web-Dev to ML, have played with several tech stacks. Can checkout
        all of my projects{" "}
        <Link isHref={true} href="https://github.com/Avinier">
          <h3 className="text-[18px]">here</h3>
        </Link>
      </p>
      <div
        className={`grid grid-cols-3 gap-y-[20px] w-[60%] pt-[20px] mx-auto ${projectMobileVer}`}
      >
        {DUMMY.map((item, i) => {
          return (
            <motion.div
              initial={{ opacity: 0 }}
              onViewportEnter={() => {
                setAnimate(true);
              }}
              onViewportLeave={() => {
                setAnimate(false);
              }}
              animate={
                animate
                  ? { opacity: 1, transition: { delay: 0.3 * i } }
                  : { opacity: 0, transition: { delay: 0.3 * i } }
              }
            >
              <ProjectCard
                key={item.id}
                name={item.project}
                pic={item.image}
                project={item}
              />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
