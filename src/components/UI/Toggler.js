import React from "react";
import { motion } from "framer-motion";

export default function Toggler(props) {
  return (
    <motion.div
      className="fixed max-[768px]:absolute top-[10px] left-[85%] max-[768px]:left-[5%]  z-[100] hover:cursor-pointer dark:text-slate-800 text-white"
      onClick={props.clickHandler}
    >
      <h4 className="text-[25px] italic">T</h4>
    </motion.div>
  );
}
