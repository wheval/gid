import Link from "next/link";

const NavLink = ({ href, children }) => {
  return (
    <Link
      href={href}
      className="hover:underline text-green-600 hover:text-red-500 decoration-yellow-500 decoration-2 underline-offset-4">
      {children}
    </Link>
  );
};

export default NavLink;