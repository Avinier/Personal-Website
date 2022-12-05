import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "./UI/Link.js";
import Grid from "./UI/Grid.js";

import heroImg from "../assets/katsuragi.jpg";
import twitterDark from "../assets/logos/twitter.png";
import twitterLight from "../assets/logos/twitter--light.png";
import githubDark from "../assets/logos/github.png";
import githubLight from "../assets/logos/github--light.png";
import gmailDark from "../assets/logos/gmail.png";
import gmailLight from "../assets/logos/gmail--light.png";

import orbDark from "../assets/orb.png";
import orbLight from "../assets/orb--light.png";

export function LogoOrb(props) {
  return (
    <motion.div
      className=" w-[50px] h-[50px] bg-accent rounded-full  z-10 hover:cursor-pointer"
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.3, type: "tween" }}
      style={{
        backgroundImage: !props.dark ? `url(${orbDark})` : `url(${orbLight})`,
        backgroundSize: "200%",
        backgroundPositionX: "-50px",
        backgroundPositionY: "-50px",
      }}
    >
      {props.children}
    </motion.div>
  );
}

export default function Hero(props) {
  const [showMore, setShowMore] = useState(false);

  const heroVar = {
    small: {
      fontSize: "16px",
      transition: {
        duration: 1,
      },
    },
    big: {
      fontSize: "18px",
      transition: {
        duration: 1,
      },
    },
  };
  return (
    <>
      <div className="relative flex justify-around items-center max-[786px]:flex-col-reverse">
        <Grid dark={props.isDark} />
        <div className="w-[40%] max-[786px]:w-[80%] max-[786px]:pt-[20px] z-10">
          <h1 className="font-title font-black text-[5rem] leading-[75px] pb-3 text-secondary dark:text-secondary--light max-[786px]:text-[4rem]">
            Hi,<br></br>I'm Avinier
          </h1>
          <motion.p
            layout
            variants={heroVar}
            animate={showMore ? "small" : "big"}
            className="font-content text-slate-50 leading-8 dark:text-slate-800 dark:font-medium"
          >
            AKA Aditya Subramanian, an 18 yo programmer and designer from
            Mumbai, India, currently studying computer science in NMIMS
            University.{" "}
            {showMore && (
              <AnimatePresence>
                <motion.span>
                  A hybridist at heart, I'm on a quest to become a skillful
                  craftsman, an artist, someone who does his work with grace.
                  Apart fromt that, I'm an{" "}
                  <Link
                    isHref={true}
                    href="https://letterboxd.com/kinoavinier/"
                    color="#1da1f2"
                  >
                    avid cinephile
                  </Link>
                  , a{" "}
                  <Link
                    isHref={true}
                    href="https://open.spotify.com/user/fwtbg1aq02m65e70m5d9j1d1n"
                    color="#ffffff"
                  >
                    music connoisseur
                  </Link>
                  , and an anime lover ^^
                </motion.span>
              </AnimatePresence>
            )}
          </motion.p>
          <Link
            clickHandler={() => {
              setShowMore(!showMore);
            }}
          >
            {showMore ? "Less." : "More?"}
          </Link>
          <section className="flex w-[35%] justify-between max-[768px]:w-[50%]">
            <LogoOrb dark={props.isDark}>
              <a href="https://twitter.com/aviniertwt" target="_blank">
                <motion.img
                  src={props.isDark ? twitterDark : twitterLight}
                  className="w-[80%] mx-auto mt-[5px]"
                />
              </a>
            </LogoOrb>
            <LogoOrb dark={props.isDark}>
              <a href="https://github.com/Avinier" target="_blank">
                <motion.img
                  src={props.isDark ? githubDark : githubLight}
                  className="w-[80%] mx-auto mt-[5px]"
                />
              </a>
            </LogoOrb>
            <LogoOrb dark={props.isDark}>
              <a href="mailto:adisubu2410@gmail.com" target="_blank">
                <motion.img
                  src={props.isDark ? gmailDark : gmailLight}
                  className="w-[80%] mx-auto mt-[5px]"
                />
              </a>
            </LogoOrb>
          </section>
        </div>
        <img
          src={heroImg}
          className="object-cover rounded-full w-[450px] h-[450px] z-[5]"
        ></img>
      </div>
    </>
  );
}
