import { AnimatePresence, motion, useScroll } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import Orb from "./UI/Orb.js";

export default function Navbar(props) {
  const isBigScreen = useMediaQuery({ query: "(min-width: 768px)" });
  const [animate, setAnimate] = useState(false);
  const { scrollY } = useScroll();
  const [pos, setPos] = useState(0);

  useEffect(() => {
    return scrollY.onChange((latest) => {
      if (latest <= 300) {
        setAnimate(false);
      } else {
        setAnimate(true);
      }
    });
  }, []);

  const navMobileVer =
    "max-[768px]:flex-col max-[768px]:left-[85%] max-[768px]:justify-around max-[768px]:h-[50vh]";

  return (
    <AnimatePresence>
      <motion.div
        layout
        className={`fixed left-[11%] w-[80%] pt-[15px] bg-main dark:bg-main--light flex justify-around cursor-pointer mx-auto z-20 ${navMobileVer}`}
        key="nav"
        transition={{ duration: 0.3, type: "tween" }}
      >
        {animate && (
          <motion.div className="flex justify-around w-[60%]">
            <Orb
              index={0}
              scrollref={props.scrollRef}
              dark={props.isDark}
              name="A"
            />
            <Orb
              index={1}
              scrollref={props.scrollRef}
              dark={props.isDark}
              name="S"
            />
            <Orb
              index={2}
              scrollref={props.scrollRef}
              dark={props.isDark}
              name="P"
            />
            <Orb
              index={3}
              scrollref={props.scrollRef}
              dark={props.isDark}
              name="C"
            />
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
