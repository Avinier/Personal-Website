import { motion, useScroll } from "framer-motion";
import React, { useEffect, useState } from "react";
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
  const isBigScreen = useMediaQuery({ query: "(min-width: 768px)" });
  const [didClick, setDidClick] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.onChange(() => {
      setDidClick(false);
    });
  }, []);

  function scrollTo(ref) {
    // ref.current.scrollIntoView({ behavior: "smooth" });
    console.log(ref.current);
  }

  const navMobileVer =
    "max-[768px]:flex-col max-[768px]:left-[85%] max-[768px]:justify-around max-[768px]:h-[50vh]";
  return (
    <motion.div
      className={`fixed left-[33%] w-[33%] pt-[15px] flex justify-around cursor-pointer mx-auto -z-1 ${navMobileVer}`}
    >
      {!didClick && (
        <motion.div
          onClick={() => {
            setDidClick((clicked) => {
              return !clicked;
            });
          }}
          className="btnOrb fixed w-[50px] h-[50px] bg-accent rounded-full hover:cursor-pointer left-[85%] top-[5%] min-[768px]:hidden min-[768px]:left-[45%]"
        ></motion.div>
      )}
      {(isBigScreen || didClick) && (
        <>
          <Orb></Orb>
          <Orb clickHandler={props.scrollHandler}></Orb>
          <Orb clickHandler={props.scrollHandler}></Orb>
          <Orb></Orb>
          <Stick />
        </>
      )}
    </motion.div>
  );
}
