import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import heroImg from "../assets/katsuragi.jpg";
import Link from "./UI/Link.js";
import Grid from "./UI/Grid.js";

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
            className="font-content text-[25px] text-slate-50 dark:text-slate-700"
          >
            AKA Aditya Subramanian, an 18 yo programmer and designer from
            Mumbai, India, currently studying computer science in NMIMS
            University.{" "}
            {showMore && (
              <AnimatePresence>
                <motion.span layout>
                  A hybridist at heart, I'm on a quest to become a skillful
                  creaftsman, an artist, someone who does his work with grace.
                  Apart fromt that, I'm an{" "}
                  <Link
                    isHref={true}
                    href="https://letterboxd.com/kinoavinier/"
                    color="#1da1f2"
                  >
                    avid cinephile
                  </Link>
                  , and a{" "}
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
        </div>
        <img
          src={heroImg}
          className="object-cover rounded-full w-[400px] h-[400px] z-[5]"
        ></img>
      </div>
    </>
  );
}
