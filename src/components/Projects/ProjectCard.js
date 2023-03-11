import React, { useState } from "react";
import { motion } from "framer-motion";
import "./ProjectCard.css";
import ProjectModal from "./ProjectModal";

export default function ProjectCard(props) {
  const [shadowPosX, setShadowPosX] = useState(8);
  const [shadowPosY, setShadowPosY] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const ARR = props.stack;

  function clickHandler() {
    setShowModal(true);
  }

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
      "rgba(255, 87, 128, 0.4) -5px 5px, rgba(255, 87, 128, 0.3) -10px 10px, rgba(255, 87, 128, 0.2) -15px 15px, rgba(255, 87, 128, 0.1) -20px 20px, rgba(255, 87, 128, 0.05) -25px 25px",
    x: "20px",
    y: "-20px",
  };

  function dragHandler(event, info) {
    let offsetX = Math.floor(info.offset.x);
    let offsetY = Math.floor(info.offset.y);

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
    <>
      <motion.section
        drag
        dragConstraints={{ top: 15, right: 15, bottom: 15, left: 15 }}
        dragSnapToOrigin
        onDrag={dragHandler}
        whileDrag={DragAnim}
        whileHover={HoverAnim}
        transition={{ duration: 0.5, type: "tween" }}
        onClick={clickHandler}
        className="relative project--card w-[250px] h-[250px] max-[786px]:w-[80%] max-[786px]:mx-auto cursor-pointer"
      >
        <div className="absolute w-[100%] h-[100%] bg-gradient-to-b from-[#0c0c0c] dark:from-[#FFFFD0] z-10">
          <h2 className="mx-auto mt-[40px] text-slate-50 font-medium dark:text-slate-500 font-content text-center text-[18px]">
            {props.name}
          </h2>
        </div>

        <img
          className="absolute object-cover w-[100%] h-[100%]"
          src={props.pic}
        />
      </motion.section>
      {showModal && <ProjectModal project={props.project} />}
    </>
  );
}
