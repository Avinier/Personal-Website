import React from "react";
import { motion } from "framer-motion";

export default function Toggler(props) {
    return (
        <motion.div
          className="absolute top-[15px] left-[85%] max-[768px]:left-[5%] max-[768px]:top-[35px] w-[50px] h-[50px] bg-accent rounded-full pt-[15px] hover:cursor-pointer"
          onClick={props.clickHandler}
        ></motion.div>
    )
}