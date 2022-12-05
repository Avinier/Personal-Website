import { motion, useScroll } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import Orb from "./UI/Orb.js";

import orbDark from "../assets/orb.webp";
import orbLight from "../assets/orb--light.webp";

function Stick(props) {
  const stickMobileVer =
    "max-[768px]:h-[80%] max-[768px]:w-1 max-[768px]:left-[17%] max-[768px]:top-[50px] -z-10";

  const stickVar = {
    onStage: {
      clipath: [
        "polygon(0% 0%, 100% 0%, 100% 0, 0 0)",
        "polygon(0% 0%, 100% 0, 100% 100%, 0 100%)",
      ],
    },
    offStage: {
      clipath: [
        "polygon(0% 0%, 100% 0, 100% 100%, 0 100%)",
        "polygon(0% 0%, 100% 0%, 100% 0, 0 0)",
      ],
    },
  };
  return (
    <motion.div
      className={`absolute top-[40px] w-[80%] h-1 ${stickMobileVer}`}
      style={{
        backgroundImage: !props.dark ? `url(${orbDark})` : `url(${orbLight})`,
      }}
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, type: "tween" }}
    ></motion.div>
  );
}

export default function Navbar(props) {
  const isBigScreen = useMediaQuery({ query: "(min-width: 768px)" });
  const [animate, setAnimate] = useState(false);
  const { scrollY } = useScroll();
  const [pos, setPos] = useState(0);

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setAnimate(true);
      setPos(() => {
        if (latest <= 250) {
          return latest;
        }
        return 250;
      });
    });
  }, []);

  const navMobileVer =
    "max-[768px]:flex-col max-[768px]:left-[85%] max-[768px]:justify-around max-[768px]:h-[50vh]";

  return (
    <motion.div
      className={`fixed left-[50%] w-[33%] pt-[15px] flex justify-around cursor-pointer mx-auto z-20 ${navMobileVer}`}
      x="0"
      style={isBigScreen && { x: -pos }}
    >
      {animate && (
        <motion.div
          onClick={() => {
            setAnimate(!animate);
          }}
          className="btnOrb fixed w-[50px] h-[50px] bg-accent rounded-full hover:cursor-pointer left-[85%] top-[5%] min-[768px]:hidden min-[768px]:left-[45%]"
          whileHover={{ rotate: [90, 0] }}
          transition={{ duration: 0.5, type: "tween" }}
          style={{
            backgroundImage: !props.isDark
              ? `url(${orbDark})`
              : `url(${orbLight})`,
            backgroundSize: "200%",
            backgroundPositionX: "-50px",
            backgroundPositionY: "-50px",
          }}
        ></motion.div>
      )}
      {(isBigScreen || !animate) && (
        <>
          <Orb index={0} scrollref={props.scrollRef} dark={props.isDark}></Orb>
          <Orb index={1} scrollref={props.scrollRef} dark={props.isDark}></Orb>
          <Orb index={2} scrollref={props.scrollRef} dark={props.isDark}></Orb>
          <Orb index={3} scrollref={props.scrollRef} dark={props.isDark}></Orb>
          <Stick dark={props.isDark} animate={animate} />
        </>
      )}
    </motion.div>
  );
}
