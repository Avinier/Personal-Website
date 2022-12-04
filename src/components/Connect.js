import React from "react";
import connectImg from "../assets/naruto.jpg";
import Link from "./UI/Link.js";
import { motion } from "framer-motion";
import Grid from "./UI/Grid";

export default function Connect() {
  return (
    <>
      <div className="relative flex justify-around items-center max-[786px]:flex-col-reverse">
        <div className="w-[40%] max-[786px]:w-[80%] max-[786px]:pt-[20px] z-10">
          <h1 className="font-title font-black text-[5rem] leading-[75px] pb-3 text-secondary dark:text-secondary--light max-[786px]:text-[4rem]">
            Wanna Connect?
          </h1>
          <motion.p className="text-slate-50 dark:text-slate-700 text-[18px]">
            I'm most active in <Link isHref={true}>Elon's Kingdom</Link>, or you
            can find me chilling with <Link isHref={true}>wumpus</Link> or on{" "}
            <Link isHref={true}>IG</Link>. And if you wanna keep it damn real,{" "}
            <Link isHref={true}>mail me!</Link> You can stalk my{" "}
            <Link isHref={true}>graphic design work</Link> too :D. I'm always
            open to fun conversations and cool work.
          </motion.p>
        </div>
        <img
          src={connectImg}
          className="object-cover rounded-full w-[400px] h-[400px] z-[5]"
        ></img>
      </div>
    </>
  );
}
