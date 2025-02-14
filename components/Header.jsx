"use client"

import Image from "next/image";
import NavLink from "./NavLink";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const linkStyles = "hover:underline decoration-yellow-500 decoration-2 underline-offset-8 font-[550]";
  
  return (
    <div className="fixed text-white top-5 left-0 right-0 mx-auto text-sm sm:text-base  max-w-[90vw] z-50">
      <div className="flex justify-between items-center gap-8 px-5 sm:px-16 py-3 sm:py-4 rounded-[50px] bg-white/25 bg-opacity-50 backdrop-blur-[900px] z-50">
        <div className="flex-shrink-0">
          <Link href="/">
            <Image
              src="/assets/gidaLogo.svg"
              width={2000}
              height={2000}
              alt="hero"
              className="w-16 sm:w-24"
            />
          </Link>
        </div>
        <nav className="uppercase gap-4 hidden lg:flex">
          <NavLink className={linkStyles} href="/">Home</NavLink>
          <NavLink className={linkStyles} href="/about">About</NavLink>
          <NavLink className={linkStyles} href="/cairo">Bootcamps</NavLink>
          <NavLink className={linkStyles} href="/events">Events</NavLink>
          <NavLink className={linkStyles} href="/blog">Blog</NavLink>
          <NavLink className={linkStyles} href="/news">Crypto News</NavLink>
        </nav>

        <div className="flex gap-1 sm:gap-2 uppercase">
          <Link
            href="/chainup"
            className="bg-gradient-to-r from-[#F7C338] hover:from-[#d1c195] to-[#FF4B59] hover:to-[#ee3f4d] text-white rounded-full uppercase font-[550] px-2 sm:px-4 py-1 sm:py-2"
          >
            chain up
          </Link>
          <Link
            href="/cairo"
            className="bg-[#900A15] hover:bg-[#a20b17] uppercase px-2 py-1 sm:px-4 sm:py-2 rounded-full font-[550]"
          >
            bootcamp
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Header;
