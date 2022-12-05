import React from "react";
import { motion } from "framer-motion";
import Logo from "../UI/Logo.js";

import cppLogo from "../../assets/logos/cpp-logo.webp";
import cssLogo from "../../assets/logos/css-logo.webp";
import htmlLogo from "../../assets/logos/html-logo.webp";
import illustratorLogo from "../../assets/logos/illustrator-logo.webp";
import javascriptLogo from "../../assets/logos/javascript-logo.webp";
import photoshopLogo from "../../assets/logos/photoshop-logo.webp";
import pythonLogo from "../../assets/logos/python-logo.webp";
import reactLogo from "../../assets/logos/react-logo.webp";
import typescriptLogo from "../../assets/logos/typescript-logo.webp";

const LOGOS = [
  {
    id: 1,
    image: reactLogo,
    color: "#333333",
  },
  {
    id: 2,
    image: pythonLogo,
    color: "#FFE57D",
  },
  {
    id: 3,
    image: javascriptLogo,
    color: "#222222",
  },
  {
    id: 4,
    image: typescriptLogo,
    color: "#222222",
  },
  {
    id: 5,
    image: htmlLogo,
    color: "#e34c26",
  },
  {
    id: 6,
    image: cssLogo,
    color: "#4292E5",
  },
  {
    id: 7,
    image: cppLogo,
    color: "#244E96",
  },
  {
    id: 8,
    image: illustratorLogo,
    color: "#222222",
  },
  {
    id: 9,
    image: photoshopLogo,
    color: "#031628",
  },
];

export default function SkillGallery() {
  return (
    <div className="grid grid-cols-3 gap-5 grid-flow-row-dense w-fit h-max mr-[25px] max-[768px]:hidden z-10">
      {LOGOS.map((logo) => {
        return <Logo key={logo.id} pic={logo.image} col={logo.color} />;
      })}
    </div>
  );
}
