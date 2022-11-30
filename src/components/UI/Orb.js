import React from "react";
import { motion } from "framer-motion";

export default function Orb(props) {
  return (
    <motion.div
      className="w-[50px] h-[50px] bg-accent rounded-full hover:cursor-pointer"
      onClick={props.clickHandler}
    ></motion.div>
  );
}
