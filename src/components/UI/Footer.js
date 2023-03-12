import React from "react";
import Link from "./Link";

export default function Footer() {
  return (
    <div className="bg-main dark:bg-main--light absolute w-[100%]">
      <p className="text-secondary dark:text-secondary--light text-center p-[20px] tracking-wider">
        Made by{" "}
        <Link isHref={true} color={"#FE4E83"}>
          Avinier
        </Link>{" "}
        , first of his name
      </p>
    </div>
  );
}
