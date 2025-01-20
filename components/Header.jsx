import Image from "next/image";
import NavLink from "./NavLink";
import Link from "next/link";

const Header = () => {
  return (
    <div className="fixed text-white top-5 left-0 right-0 mx-auto text-sm max-w-[90vw] z-50">
      <div className="flex justify-between items-center gap-8  px-6 py-3 rounded-full bg-opacity-50 backdrop-blur-[900px] z-50">
        <div className="flex-shrink-0">
          <Image
            src="/assets/gidaLogo.svg"
            width={2000}
            height={2000}
            alt="hero"
            className="w-24"
          />
        </div>
        <nav className="uppercase gap-6 hidden lg:flex">
          <NavLink
            className="hover:underline decoration-yellow-500 decoration-2 underline-offset-4"
            href="/"
          >
            Bootcamp
          </NavLink>
          <NavLink href="/">Courses</NavLink>
          <NavLink href="/events">Events</NavLink>
          <NavLink href="/">About</NavLink>
          <NavLink href="/">Blog</NavLink>
        </nav>
        <div className="flex gap-2 uppercase">
          <Link href="/chain-up">
            <button className="bg-gradient-to-r from-[#F7C338] hover:from-[#dfb02d] to-[#FF4B59] hover:to-[#ee3f4d] text-white rounded-full uppercase font-bold px-4 py-2 hidden md:block">
              chain up
            </button>
          </Link>
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
