import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import "./Skills.css";
import SkillGallery from "./SkillGallery.js";
import SkillTable from "./SkillTable.js";
import Link from "../UI/Link.js";

import rightarrow from "../../assets/arrow-right-solid.svg";

export default function Skills() {
  const [showTable, setShowTable] = useState(false);

  const tableVars = {
    entry: {
      clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
    },
    onStage: {
      clipPath: [
        "polygon(0 0, 100% 0, 100% 0, 0 0)",
        "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      ],
    },
    offStage: {
      clipPath: [
        "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
      ],
    },
  };

  return (
    <div className="flex justify-around max-[786px]:w-[80%] ml-[25px] max-[786px]:mx-auto">
      <article className="w-[50%] max-[786px]:w-fit">
        <h2 className="font-title font-black text-[5rem] text-secondary dark:text-secondary--light max-[786px]:text-[4rem]">
          My Skills
        </h2>
        <h3 className="text-accent--light dark:text-accent--light">
          Currently learning rust and web3, algorithms
        </h3>

        <AnimatePresence>
          {!showTable && (
            <motion.section
              key="skill--content"
              exit={{ opacity: 0 }}
              transition={{ type: "tween", duration: 0.4 }}
            >
              <motion.p
                layout
                className="font-content w-[80%] text-slate-50 dark:text-slate-700  max-[786px]:w-fit"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </motion.p>
              <div className="w-fit relative flex max-[768px]:hidden">
                <Link>Explore Here</Link>
                <img
                  className="h-[20px] absolute top-[30%] left-[105%]"
                  src={rightarrow}
                />
              </div>
            </motion.section>
          )}
        </AnimatePresence>
        <motion.div>
          <Link
            isHref={false}
            clickHandler={() => {
              setShowTable((showTable) => !showTable);
            }}
          >
            {!showTable ? `Show More` : `Show Less`}
          </Link>
          <AnimatePresence>
            {showTable && (
              <motion.div
                key="skill--table"
                variants={tableVars}
                initial="entry"
                animate="onStage"
                exit="offStage"
                className="skill--table"
                transition={{ type: "tween", duration: 0.5 }}
              >
                <SkillTable />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </article>
      <SkillGallery />
    </div>
  );
}
