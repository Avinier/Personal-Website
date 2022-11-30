import React, { useState } from "react";
import "./Logo.css";
import { motion } from "framer-motion";

export default function Logo(props) {
  const [minimizeLogo, setMinimizeLogo] = useState(false);

  return (
    <motion.div
      whileHover={{ height: "150px", width: "140px", borderRadius: "10px" }}
      onHoverStart={() => {
        setMinimizeLogo(true);
      }}
      onHoverEnd={() => {
        setMinimizeLogo(false);
      }}
      transition={{ duration: 0.5, type: "tween" }}
      className="logo--container w-[125px] h-[125px] "
      style={{ backgroundColor: `${props.col}` }}
    >
      <motion.img
        whileHover={{ opacity: 0 }}
        transition={{ duration: 0.5, type: "tween" }}
        className="w-[125px] h-[125px] object-cover"
        src={props.pic}
      />
    </motion.div>
  );
}
