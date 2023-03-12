import React from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Orb(props) {
  const scrollToIndex = () => {
    if (props.scrollref.current) {
      const divNode = props.scrollref.current;

      const elementNode = divNode.querySelectorAll(".sect")[props.index];
      console.log(elementNode);
      elementNode.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      className="w-[50px] h-[50px] hover:cursor-pointer dark:text-slate-800 text-white"
      onClick={scrollToIndex}
    >
      <h4 className="text-[25px]">{props.name}</h4>
    </motion.div>
  );
}
