"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function Navigation() {
  const pathName = usePathname();
  const path = pathName.replace("/", "");

  return (
    <div className="flex gap-4 text-[#FFFFFF] font-bold">
      <Link
        href="/"
        className={`hover:text-[#D87D4A] ${path === "" && "text-[#D87D4A] "}  `}
      >
        HOME
      </Link>
      <Link
        href="/headphones"
        className={`hover:text-[#D87D4A] ${
          path === "headphones" && "text-[#D87D4A] "
        }  `}
      >
        HEADPHONES
      </Link>
      <Link
        href="/speakers"
        className={`hover:text-[#D87D4A] ${
          path === "speakers" && "text-[#D87D4A] "
        }  `}
      >
        SPEAKERS
      </Link>
      <Link
        href="/earphones"
        className={`hover:text-[#D87D4A] ${
          path === "earphones" && "text-[#D87D4A] "
        }  `}
      >
        EARPHONES
      </Link>
    </div>
  );
}

export default Navigation;
