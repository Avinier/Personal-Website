import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

import Link from "./UI/Link.js";
import Grid from "./UI/Grid.js";

import heroImgLight from "../assets/katsuragi.webp";
import heroImgDark from "../assets/katsuragi-dark.webp";

export default function Hero(props) {
  const [showMore, setShowMore] = useState(false);
  const isBigScreen = useMediaQuery({ query: "(min-width: 768px)" });

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
      <div className="relative flex flex-col justify-around items-center">
        <Grid dark={props.isDark} />
        <motion.img
          layout
          src={props.isDark ? heroImgDark : heroImgLight}
          className="object-cover rounded-full w-[400px] h-[400px] max-[768px]:h-[350px] max-[768px]:w-[350px] z-[5]"
        ></motion.img>
        <div className="w-[50%] pt-[20px] max-[786px]:w-[100%] max-[786px]:pt-[20px] z-10">
          <h1 className="text-[85px] text-center leading-[75px] pb-3 text-secondary dark:text-secondary--light max-[786px]:text-[4rem]">
            Hi,
            {!isBigScreen && <br />} I'm Avinier
          </h1>
          <motion.p
            layout
            variants={heroVar}
            animate={showMore ? "small" : "big"}
            className="text-center text-slate-50 leading-8 dark:text-slate-800 dark:font-medium max-[768px]:leading-10 max-[768px]:m-[5px] "
          >
            AKA Aditya Subramanian, an 19 yo programmer and designer from
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
          <article className="flex justify-around w-[70%] mx-auto max-[768px]:w-[80%]">
            <Link
              isHref={true}
              href="https://twitter.com/avinierx"
              color="#1DA1F2"
            >
              twitter
            </Link>
            <Link
              isHref={true}
              href="https://www.linkedin.com/in/aditya-subramanian-3647a1203/"
              color="#0e76a8"
            >
              linkedin
            </Link>
            <Link isHref={true} href="https://github.com/Avinier" color="#222">
              github
            </Link>
            {/* {isBigScreen && (
              <Link
                isHref={true}
                href="https://drive.google.com/file/d/1kj0-58gAX2zz_JV6UtalN2IUE-njMpln/view?usp=sharing"
                color="#5BFF9D"
              >
                resume
              </Link>
            )} */}
          </article>
        </div>
      </div>
    </>
  );
}
