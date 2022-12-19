import React from "react";
import connectImg from "../assets/naruto.gif";
import Link from "./UI/Link.js";
import { motion } from "framer-motion";
import Footer from "./UI/Footer";

export default function Connect() {
  return (
    <>
      <div className="relative flex justify-around items-center max-[786px]:flex-col-reverse dark:font-medium pb-[5rem]">
        <div className="w-[40%] max-[786px]:w-[80%] max-[786px]:pt-[20px] z-10">
          <h1 className="font-title font-black text-[5rem] leading-[75px] pb-3 text-secondary dark:text-secondary--light max-[786px]:text-[4rem]">
            Wanna Connect?
          </h1>
          <motion.p className="text-slate-50 dark:text-slate-700 text-[18px] leading-8">
            I'm most active in{" "}
            <Link
              isHref={true}
              href="https://twitter.com/aviniertwt"
              color="#1DA1F2"
            >
              Elon's Kingdom
            </Link>
            , or you can find me chilling with{" "}
            <Link
              isHref={true}
              href="https://discord.com/users/1025039473932775485"
              color="#7289da"
            >
              wumpus
            </Link>{" "}
            or on{" "}
            <Link
              isHref={true}
              href="https://www.instagram.com/avinier_2410/"
              color="#833AB4"
            >
              IG
            </Link>
            . And if you wanna keep it damn real,{" "}
            <Link
              isHref={true}
              href="mailto:adisubu2410@gmail.com"
              color="#E1306C"
            >
              mail me!
            </Link>{" "}
            You can stalk my{" "}
            <Link
              isHref={true}
              href="https://in.pinterest.com/avinier_2410/moi-work/"
              color="#E60023"
            >
              graphic design work
            </Link>{" "}
            too :D. I'm always open to fun conversations and cool work.
          </motion.p>
        </div>
        <img
          src={connectImg}
          className="object-cover rounded-full w-[450px] h-[450px] max-[768px]:h-[350px] max-[768px]:w-[350px] z-[5]"
        ></img>
      </div>
      <Footer />
    </>
  );
}
