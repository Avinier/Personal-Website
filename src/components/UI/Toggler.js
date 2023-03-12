import React from "react";
import { motion } from "framer-motion";

export default function Toggler(props) {
  return (
    <motion.div
      className="absolute top-[15px] left-[85%] max-[768px]:left-[5%] max-[768px]:top-[35px] z-10 hover:cursor-pointer dark:text-main text-white"
      onClick={props.clickHandler}
    >
      <h4 className="text-[25px] italic">T</h4>
    </motion.div>
  );
}
