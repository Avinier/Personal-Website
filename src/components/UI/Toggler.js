import React from "react";
import { motion } from "framer-motion";
import eyeDark from "../../assets/logos/eye.png";
import eyeLight from "../../assets/logos/closed-eye--light.png";
import orbDark from "../../assets/orb.png";
import orbLight from "../../assets/orb--light.png";

export default function Toggler(props) {
  return (
    <motion.div
      className="absolute top-[15px] left-[85%] max-[768px]:left-[5%] max-[768px]:top-[35px] w-[50px] h-[50px] rounded-full  z-10 hover:cursor-pointer"
      whileHover={{ rotate: [180, 360] }}
      transition={{ duration: 0.5, type: "tween" }}
      style={{
        backgroundImage: !props.isDark ? `url(${orbDark})` : `url(${orbLight})`,
        backgroundSize: "200%",
        backgroundPositionX: "-50px",
        backgroundPositionY: "-50px",
      }}
      onClick={props.clickHandler}
    >
      <motion.img
        src={props.isDark ? eyeDark : eyeLight}
        className="w-[80%] mx-auto mt-[5px]"
      />
    </motion.div>
  );
}
