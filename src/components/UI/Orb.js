import React from "react";
import { motion } from "framer-motion";

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
      className="w-[50px] h-[50px] bg-accent rounded-full hover:cursor-pointer"
      onClick={scrollToIndex}
    ></motion.div>
  );
}
