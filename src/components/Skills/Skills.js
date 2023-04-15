import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import "./Skills.css";
import SkillGallery from "./SkillGallery.js";
import SkillTable from "./SkillTable.js";
import Link from "../UI/Link.js";

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
    <div className=" flex flex-col max-[786px]:w-[100%]  max-[786px]:mx-auto dark:font-medium">
      <article className="w-[80%] max-[786px]:w-[100%] mx-auto">
        <h1 className="text-[6rem] text-center text-secondary dark:text-secondary--light max-[786px]:text-[4rem]">
          My Skills
        </h1>
        <AnimatePresence>
          {!showTable && (
            <motion.section
              key="skill--content"
              exit={{ opacity: 0 }}
              transition={{ type: "tween", duration: 0.4 }}
            >
              <motion.p
                layout
                className="w-[75%] mx-auto text-center text-slate-50 dark:text-slate-700 leading-8 max-[786px]:w-[95%] max-[768px]:leading-10"
              >
                Programming, Design, Finance, Business, Art. I have my practical
                knowledge in a diversified set of domains. My curiosity and
                passion has led me to pursue these skills.
              </motion.p>
            </motion.section>
          )}
        </AnimatePresence>
        <motion.div>
          <AnimatePresence>
            {showTable && (
              // <motion.div
              //   key="skill--table"
              //   variants={tableVars}
              //   initial="entry"
              //   animate="onStage"
              //   exit="offStage"
              //   className="skill--table"
              //   transition={{ type: "tween", duration: 0.5 }}
              // >
              //   <SkillTable />
              // </motion.div>
              <h3 className="text-[30px] text-center ">
                detailed table coming soon!
              </h3>
            )}
            <Link
              isHref={false}
              clickHandler={() => {
                setShowTable((showTable) => !showTable);
              }}
            >
              {!showTable ? `show more` : `show less`}
            </Link>
          </AnimatePresence>
        </motion.div>
      </article>
      {!showTable && <SkillGallery />}
    </div>
  );
}
