import React, { useState, useRef, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import produce from "immer";
import { useMediaQuery } from "react-responsive";

export default function Grid(props) {
  const isBigScreen = useMediaQuery({ query: "(min-width: 786px)" });

  const rowNum = 5;
  const colNum = isBigScreen ? 10 : 5;
  const [grid, setGrid] = useState(() => {
    const rows = [];
    for (let i = 0; i < rowNum; i++) {
      rows.push(Array.from(Array(colNum), () => 0));
    }
    return rows;
  });

  const gridVar = {
    onHov: {
      backgroundColor: props.dark
        ? ["#111", "#222", "#333"]
        : ["#F4D983", "#FFECB0", "#FFEFBE"],
      transition: {
        duration: 1,
        type: "tween",
      },
    },
    offHov: {
      backgroundColor: props.dark
        ? ["#333", "#222", "#0c0c0c"]
        : ["#FFEFBE", "#FFECB0", "#FFFFD0"],
      transition: {
        duration: 0.5,
        type: "tween",
      },
    },
  };

  return (
    <motion.div className="absolute grid grid-cols-10 max-[768px]:grid-cols-5 z-0">
      {grid.map((rows, x) =>
        rows.map((col, y) => (
          <motion.div
            key={`${x}_${y}`}
            id={`${x}_${y}`}
            onHoverStart={() => {
              const newGrid = produce(grid, (gridCopy) => {
                gridCopy[x][y] = !grid[x][y];
              });
              setGrid(newGrid);
            }}
            onHoverEnd={() => {
              setGrid((prev) => {
                return produce(prev, (gridCopy) => {
                  for (let x = 0; x < rowNum; x++) {
                    for (let y = 0; y < colNum; y++) {
                      gridCopy[x][y] = 0;
                    }
                  }
                });
              });
            }}
            variants={gridVar}
            animate={grid[x][y] ? "onHov" : "offHov"}
            className={`${x}_${y}  w-[10vw] h-[10vw] max-[768px]:h-[20vw] max-[768px]:w-[20vw]`}
          />
        ))
      )}
    </motion.div>
  );
}
