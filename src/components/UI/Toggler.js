import React from "react";
import { motion } from "framer-motion";

export default function Toggler(props) {
  return (
    <motion.div
      className="absolute top-[15px] left-[85%] max-[768px]:left-[5%] max-[768px]:top-[35px] z-10 hover:cursor-pointer font-title text-[20px] font-black dark:text-main text-white"
      onClick={props.clickHandler}
    >
      T
    </motion.div>
  );
}
