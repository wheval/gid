import Link from "next/link";

const NavLink = ({ href, children }) => {
  return (
    <Link
      href={href}
      className="hover:underline decoration-yellow-500 decoration-2 underline-offset-4  font-[550]">
      {children}
    </Link>
  );
};

export default NavLink;