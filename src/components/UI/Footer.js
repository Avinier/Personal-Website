import React from "react";
import Link from "./Link";

export default function Footer() {
  return (
    <div className="bg-[#181818] dark:bg-[#fff4ae] absolute w-[100%]">
      <p className="font-content font-[800] text-secondary dark:text-secondary--light text-center p-[20px] tracking-wider">
        Made with {"<3"} by{" "}
        <Link isHref={true} color={"#FE4E83"}>
          Avinier
        </Link>
      </p>
    </div>
  );
}
