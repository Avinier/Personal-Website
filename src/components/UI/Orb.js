import React from "react";
import { motion } from "framer-motion";
import orbDark from "../../assets/orb.png";
import orbLight from "../../assets/orb--light.png";

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
      className="w-[50px] h-[50px] rounded-full hover:cursor-pointer"
      onClick={scrollToIndex}
      whileHover={{ rotate: [90, 0] }}
      transition={{ duration: 0.5, type: "tween" }}
      style={{
        backgroundImage: !props.dark ? `url(${orbDark})` : `url(${orbLight})`,
        backgroundSize: "200%",
        backgroundPositionX: "-50px",
        backgroundPositionY: "-50px",
      }}
    ></motion.div>
  );
}
