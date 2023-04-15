import { AnimatePresence, motion, useScroll } from "framer-motion";
import React, { useEffect, useState } from "react";
import Orb from "./UI/Orb.js";

export default function Navbar(props) {
  const [animate, setAnimate] = useState(false);
  const { scrollY } = useScroll();

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
    "max-[768px]:left-0 max-[768px]:justify-around max-[768px]:w-[100%]";

  return (
    <AnimatePresence>
      <motion.div
        layout
        className={`fixed left-[11%] w-[80%] bg-main dark:bg-main--light flex justify-around cursor-pointer mx-auto z-20 ${navMobileVer}`}
        key="nav"
        transition={{ duration: 0.3, type: "tween" }}
      >
        {animate && (
          <motion.div
            className="flex justify-around w-[60%] max-[768px]:w-[90%]"
            animate={{ opacity: [0, 50, 100] }}
            transition={{ duration: 0.5, type: "tween", delay: 0.3 }}
          >
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
