"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function Navigation({ style }) {
  const pathName = usePathname();
  const path = pathName.replace("/", "");

  return (
    <div className={style}>
      <Link
        href="/"
        className={`hover:text-[#D87D4A] ${
          path === "" && "text-[#D87D4A] "
        }  font-bold text-[13px] leading-[25px] tracking-[2px] `}
      >
        HOME
      </Link>
      <Link
        href="/headphones"
        className={`hover:text-[#D87D4A] ${
          path === "headphones" && "text-[#D87D4A] "
        } font-bold text-[13px] leading-[25px] tracking-[2px] `}
      >
        HEADPHONES
      </Link>
      <Link
        href="/speakers"
        className={`hover:text-[#D87D4A] ${
          path === "speakers" && "text-[#D87D4A] "
        } font-bold text-[13px] leading-[25px] tracking-[2px] `}
      >
        SPEAKERS
      </Link>
      <Link
        href="/earphones"
        className={`hover:text-[#D87D4A] ${
          path === "earphones" && "text-[#D87D4A] "
        } font-bold text-[13px] leading-[25px] tracking-[2px] `}
      >
        EARPHONES
      </Link>
    </div>
  );
}

export default Navigation;
