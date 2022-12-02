import React from "react";
import { motion } from "framer-motion";
import Logo from "../UI/Logo";

import cppLogo from "../../assets/logos/cpp-logo.png";
import cssLogo from "../../assets/logos/css-logo.png";
import htmlLogo from "../../assets/logos/html-logo.png";
import illustratorLogo from "../../assets/logos/illustrator-logo.png";
import javascriptLogo from "../../assets/logos/javascript-logo.png";
import photoshopLogo from "../../assets/logos/photoshop-logo.png";
import pythonLogo from "../../assets/logos/python-logo.png";
import reactLogo from "../../assets/logos/react-logo.png";
import typescriptLogo from "../../assets/logos/typescript-logo.png";

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
    <div className="grid grid-cols-3 gap-5 grid-flow-row-dense w-fit h-max max-[768px]:hidden">
      {LOGOS.map((logo) => {
        return <Logo key={logo.id} pic={logo.image} col={logo.color} />;
      })}
    </div>
  );
}
