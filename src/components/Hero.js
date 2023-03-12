import React, { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useScroll,
  useMotionValue,
  useTransform,
} from "framer-motion";
import Link from "./UI/Link.js";
import Grid from "./UI/Grid.js";

import heroImg from "../assets/katsuragi.webp";

export default function Hero(props) {
  const [showMore, setShowMore] = useState(false);

  const { scrollY } = useScroll();
  const x = useMotionValue(0);

  const size = useTransform(x, [100, 300], [400, 60]);
  const opacity = useTransform(x, [100, 300], [1, 0.25]);

  useEffect(() => {
    return scrollY.onChange((latest) => {
      if (latest <= 300) {
        x.set(latest);
      } else {
        x.set(0);
      }
    });
  }, []);

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
        {/* <Grid dark={props.isDark} /> */}
        <motion.img
          layout
          src={heroImg}
          style={{ height: size, width: size, opacity: opacity }}
          transition={{ type: "tween" }}
          className="object-cover rounded-full w-[400px] h-[400px] max-[768px]:h-[350px] max-[768px]:w-[350px] z-[5]"
        ></motion.img>
        <div className="w-[50%] pt-[20px] max-[786px]:w-[80%] max-[786px]:pt-[20px] z-10">
          <h1 className="text-[85px] text-center leading-[75px] pb-3 text-secondary dark:text-secondary--light max-[786px]:text-[4rem]">
            Hi, I'm Avinier
          </h1>
          <motion.p
            layout
            variants={heroVar}
            animate={showMore ? "small" : "big"}
            className="text-center text-slate-50 leading-8 dark:text-slate-800 dark:font-medium"
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
          <article className="flex justify-around w-[50%] mx-auto">
            <Link
              isHref={true}
              href="mailto:adisubu2410@gmail.com"
              color="#E1306C"
            >
              gmail
            </Link>
            <Link
              isHref={true}
              href="https://twitter.com/aviniertwt"
              color="#1DA1F2"
            >
              twitter
            </Link>
            <Link isHref={true} href="https://github.com/Avinier" color="#222">
              github
            </Link>
          </article>
        </div>
      </div>
    </>
  );
}
