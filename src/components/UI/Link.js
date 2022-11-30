import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function StyleOfLink(props) {
  const [animateLink, setAnimateLink] = useState(false);

  const linkVars = {
    onStage: {
      clipPath: [
        "polygon(0 0, 0 100%, 0 100%, 0 0)",
        "polygon(100% 0, 100% 100%, 0 100%, 0 0)",
      ],
    },
    offStage: {
      clipPath: [
        "polygon(100% 0, 100% 100%, 0 100%, 0 0)",
        "polygon(100% 0, 100% 100%, 100% 100%, 100% 0)",
      ],
    },
  };

  return (
    <>
      <motion.button
        layout
        onClick={props.clickHandler}
        className="skill--btn font-subheading text-pastel--purple text-xl hover:cursor-pointer"
        onHoverStart={() => {
          setAnimateLink(true);
        }}
        onHoverEnd={() => {
          setAnimateLink(false);
        }}
      >
        {props.children}
      </motion.button>
      <motion.div
        variants={linkVars}
        animate={animateLink ? "onStage" : "offStage"}
        transition={{ duration: 0.4, type: "tween" }}
        className="h-1 bg-slate-50"
      ></motion.div>
    </>
  );
}

export default function Link(props) {
  return (
    <>
      {!props.isHref && (
        <div className="w-fit py-2" onClick={props.clickHandler}>
          <StyleOfLink>{props.children}</StyleOfLink>
        </div>
      )}
      {props.isHref && (
        <a className="" href={props.href} target="_blank">
          <StyleOfLink>{props.children}</StyleOfLink>
        </a>
      )}
    </>
  );
}
