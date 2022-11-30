import React, { useState } from "react";
import { motion } from "framer-motion";
import "./ProjectCard.css";

export default function ProjectCard(props) {
  const [shadowPosX, setShadowPosX] = useState(8);
  const [shadowPosY, setShadowPosY] = useState(0);

  const ARR = props.stack;

  const DragAnim = {
    boxShadow: `rgba(240, 46, 170, 0.4) ${shadowPosX}px ${shadowPosY}px, rgba(240, 46, 170, 0.3) ${
      shadowPosX * 2
    }px ${shadowPosY * 2}px, rgba(240, 46, 170, 0.2) ${shadowPosX * 3}px ${
      shadowPosY * 3
    }px, rgba(240, 46, 170, 0.1) ${shadowPosX * 4}px ${
      shadowPosY * 4
    }px, rgba(240, 46, 170, 0.05) ${shadowPosX * 5}px ${shadowPosY * 5}px`,
  };

  const HoverAnim = {
    boxShadow:
      "rgba(240, 46, 170, 0.4) -5px 5px, rgba(240, 46, 170, 0.3) -10px 10px, rgba(240, 46, 170, 0.2) -15px 15px, rgba(240, 46, 170, 0.1) -20px 20px, rgba(240, 46, 170, 0.05) -25px 25px",
    x: "20px",
    y: "-20px",
  };

  function dragHandler(event, info) {
    let offsetX = Math.floor(info.offset.x);
    let offsetY = Math.floor(info.offset.y);

    console.log(offsetX, offsetY);

    //N,S drag
    if ((offsetX === 0) & (offsetY < -5 || offsetX > 5)) {
      setShadowPosX(0);
      setShadowPosY(-`${offsetY / 10}`);
    }
    //NE, SW drag
    else if ((offsetX > 0) & (offsetY < -5) || (offsetY > 0) & (offsetX < -5)) {
      setShadowPosX(-`${offsetX / 10}`);
      setShadowPosY(-`${offsetY / 10}`);
    }
    //E,W drag
    else if ((offsetY === 0) & (offsetX > 5 || offsetX < -5)) {
      setShadowPosX(-`${offsetX / 10}`);
      setShadowPosY(0);
    }
    //SE,NW drag
    else if ((offsetY > 5) & (offsetX > 5) || (offsetX < 0) & (offsetY < 0)) {
      setShadowPosX(-`${offsetX / 10}`);
      setShadowPosY(-`${offsetY / 10}`);
    }
  }

  return (
    <motion.section
      drag
      dragConstraints={{ top: 15, right: 15, bottom: 15, left: 15 }}
      dragSnapToOrigin
      onDrag={dragHandler}
      whileDrag={DragAnim}
      whileHover={HoverAnim}
      transition={{ duration: 0.5, type: "tween" }}
      className="project--card w-[25%] bg-slate-50 rounded-lg m-5 max-[786px]:w-[80%] max-[786px]:mx-auto"
    >
      <img
        className="w-[100%] h-[100px] object-cover rounded-t-lg"
        src={props.pic}
      />
      <div className=" p-5">
        <p className="">{props.desc}</p>
        <a className="text-accent cursor-pointer">{props.link}</a>
        <ul className="flex ">
          {ARR.map((stackitem, i) => {
            return (
              <li key={i}>
                <img
                  className="w-[40px] h-[40px] object-contain"
                  src={stackitem}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </motion.section>
  );
}
