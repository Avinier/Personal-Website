import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "./UI/Link.js";
import Grid from "./UI/Grid.js";

import heroImg from "../assets/katsuragi.webp";

import orbDark from "../assets/orb.webp";
import orbLight from "../assets/orb--light.webp";

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
      <div className="relative flex flex-col justify-around items-center max-[786px]:flex-col-reverse">
        <Grid dark={props.isDark} />
        <img
          src={heroImg}
          className="object-cover rounded-full w-[400px] h-[400px] max-[768px]:h-[350px] max-[768px]:w-[350px] z-[5]"
        ></img>
        <div className="w-[50%] pt-[20px] max-[786px]:w-[80%] max-[786px]:pt-[20px] z-10">
          <h1 className="font-title font-black text-[5rem] text-center leading-[75px] pb-3 text-secondary dark:text-secondary--light max-[786px]:text-[4rem]">
            Hi, I'm Avinier
          </h1>
          <motion.p
            layout
            variants={heroVar}
            animate={showMore ? "small" : "big"}
            className="font-content text-center text-slate-50 leading-8 dark:text-slate-800 dark:font-medium"
          >
            AKA Aditya Subramanian, an 18 yo programmer and designer from
            Mumbai, India, currently studying computer science in NMIMS
            University.{" "}
            {showMore && (
              <AnimatePresence>
                <motion.span>
                  A hybridist at heart, I'm on a quest to become a skillful
                  craftsman, an artist, someone who does his work with grace.
                  Apart from that, I'm an{" "}
                  <Link
                    isHref={true}
                    href="https://letterboxd.com/kinoavinier/"
                    color="#ff8000"
                  >
                    avid cinephile
                  </Link>
                  , a{" "}
                  <Link
                    isHref={true}
                    href="https://open.spotify.com/user/fwtbg1aq02m65e70m5d9j1d1n"
                    color="#1DB954"
                  >
                    music connoisseur
                  </Link>
                  , and an anime lover.
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
        </div>
      </div>
    </>
  );
}
