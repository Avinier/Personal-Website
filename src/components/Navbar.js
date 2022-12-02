import { motion, useScroll } from "framer-motion";
import React, { useEffect, useState, useRef } from "react";
import { useMediaQuery } from "react-responsive";
import Orb from "./UI/Orb";

function Stick() {
  const stickMobileVer =
    "max-[768px]:h-[80%] max-[768px]:w-1 max-[768px]:left-[15%]";
  return (
    <motion.div
      className={`absolute top-[40px] w-[80%] h-1 bg-accent ${stickMobileVer}`}
    ></motion.div>
  );
}

export default function Navbar(props) {
  const scrollref = useRef(null);
  const isBigScreen = useMediaQuery({ query: "(min-width: 768px)" });
  const [animate, setAnimate] = useState(false);
  const { scrollY } = useScroll();
  const { scrollYProgress } = useScroll({
    target: scrollref,
    offset: ["start end", "end end"],
  });

  useEffect(() => {
    return scrollY.onChange(() => {
      setAnimate(true);
    });
  }, []);

  const navMobileVer =
    "max-[768px]:flex-col max-[768px]:left-[85%] max-[768px]:justify-around max-[768px]:h-[50vh]";

  return (
    <motion.div
      ref={scrollref}
      className={`fixed left-[55%] w-[33%] pt-[15px] flex justify-around cursor-pointer mx-auto ${navMobileVer}`}
    >
      {animate && (
        <motion.div
          onClick={() => {
            setAnimate((clicked) => {
              return !clicked;
            });
          }}
          className="btnOrb fixed w-[50px] h-[50px] bg-accent rounded-full hover:cursor-pointer left-[85%] top-[5%] min-[768px]:hidden min-[768px]:left-[45%]"
        ></motion.div>
      )}
      {(isBigScreen || !animate) && (
        <>
          <Orb index={0} scrollref={props.scrollRef}></Orb>
          <Orb index={1} scrollref={props.scrollRef}></Orb>
          <Orb index={2} scrollref={props.scrollRef}></Orb>
          <Orb index={3} scrollref={props.scrollRef}></Orb>
          <Stick />
        </>
      )}
    </motion.div>
  );
}
