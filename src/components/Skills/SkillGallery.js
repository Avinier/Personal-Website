import React from "react";
import { motion } from "framer-motion";
import Logo from "../UI/Logo.js";

const SKILLS = [
  {
    id: 0,
    title: "python",
  },
  {
    id: 1,
    title: "python",
  },
  {
    id: 2,
    title: "python",
  },
  {
    id: 3,
    title: "python",
  },
  {
    id: 4,
    title: "python",
  },
  {
    id: 5,
    title: "python",
  },
  {
    id: 6,
    title: "python",
  },
  {
    id: 7,
    title: "python",
  },
  {
    id: 8,
    title: "python",
  },
  {
    id: 9,
    title: "python",
  },
  {
    id: 10,
    title: "python",
  },
  {
    id: 11,
    title: "python",
  },
];

export default function SkillGallery() {
  return (
    <div className="grid grid-cols-4 gap-[50px] w-[60%] mx-auto pt-[50px] h-max max-[768px]:hidden z-10">
      {SKILLS.map((item, i) => {
        return (
          <div
            className="text-center font-content text-slate-50 dark:text-slate-700"
            key={item.id}
          >
            {item.title}
          </div>
        );
      })}
    </div>
  );
}
