import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import produce from "immer";

import Logo from "../UI/Logo.js";

const SKILLS = [
  {
    id: 0,
    title: "python",
    color: "#fff",
  },
  {
    id: 1,
    title: "javascript",
    color: "#fff",
  },
  {
    id: 2,
    title: "equity investing",
    color: "#fff",
  },
  {
    id: 3,
    title: "nextjs",
    color: "#fff",
  },
  {
    id: 4,
    title: "c++",
    color: "#fff",
  },
  {
    id: 5,
    title: "typescript",
    color: "#fff",
  },
  {
    id: 6,
    title: "tailwindcss",
    color: "#fff",
  },
  {
    id: 7,
    title: "rust",
    color: "#fff",
  },
  {
    id: 8,
    title: "f&o trading",
    color: "#fff",
  },
  {
    id: 9,
    title: "figma",
    color: "#fff",
  },
  {
    id: 10,
    title: "photoshop",
    color: "#fff",
  },
  {
    id: 11,
    title: "illustrator",
    color: "#fff",
  },
];

export default function SkillGallery() {
  const [animate, setAnimate] = useState(false);

  return (
    <div className="grid grid-cols-4 w-[60%] mx-auto pt-[50px] h-[300px] max-[768px]:hidden z-10">
      {SKILLS.map((item, i) => {
        return (
          <motion.div
            initial={{ opacity: 0 }}
            onViewportEnter={() => {
              setAnimate(true);
            }}
            onViewportLeave={() => {
              setAnimate(false);
            }}
            animate={
              animate
                ? {
                    opacity: 1,
                    transition: { delay: 0.2 * i },
                  }
                : {
                    opacity: 0,
                    transition: {
                      delay: 0.2 * i,
                    },
                  }
            }
            className="text-center font-content pt-[30px] text-slate-50 dark:text-slate-700"
            key={item.id}
          >
            <p>{item.title}</p>
          </motion.div>
        );
      })}
    </div>
  );
}
