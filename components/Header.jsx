import Image from "next/image";
import NavLink from "@/reusables/NavLink";
import Link from "next/link";

const Header = () => {
  return (
    <div className="fixed text-white top-5 left-0 right-0 mx-auto text-sm max-w-[90vw] z-50">
      <div className="flex justify-between items-center gap-8  px-6 py-3 rounded-full bg-opacity-50 backdrop-blur-[200px]  z-50">
        <div className="flex-shrink-0">
          <Image
            src="/assets/gidaLogo.png"
            width={2000}
            height={2000}
            alt="hero"
            className="w-24"
          />
        </div>
        <nav className="uppercase gap-2 hidden md:flex">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/">Bootcamp</NavLink>
          <NavLink href="/">Courses</NavLink>
          <NavLink href="/">Events</NavLink>
          <NavLink href="/">About</NavLink>
          <NavLink href="/">Blog</NavLink>
        </nav>
        <div className="flex gap-2 uppercase">
          <button className="bg-gradient-to-r from-[#F7C338] hover:from-[#dfb02d] to-[#FF4B59] hover:to-[#ee3f4d] text-white line-clamp-1 rounded-full uppercase font-bold px-4 py-2">
            connect wallet
          </button>
          <Link
            href="/register"
            className="bg-[#900A15] hover:bg-[#a20b17] uppercase px-4 py-2 rounded-full"
          >
            register
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Header;
