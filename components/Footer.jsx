"use client";
import Link from "next/link";

const Footer = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("coming soon");
  };
  return (
    <footer className="bg-primary text-white px-4 sm:px-8 lg:px-20 py-10">
      <div className="w-full max-w-screen-2xl lg:mx-auto font-lato grid grid-cols-2 grid-rows-3 lg:flex lg:flex-row justify-between gap-8 justify-items-start">
        {/* About Section */}
        <div className="w-full">
          <p className="text-xl sm:text-2xl lg:text-[2.5rem] font-semibold font-clash mb-4">About</p>
          <ul className="space-y-2 text-gray-100">
            <li>
              <Link href="/about-gida" className="hover:underline">
                About GIDA
              </Link>
            </li>
            <li>
              <Link href="/sponsorship" className="hover:underline">
                Partnerships
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:underline">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:underline">
                Privacy
              </Link>
            </li>
          </ul>
        </div>

        {/* Events Section */}
        <div className="w-full">
          <h2 className="text-xl sm:text-2xl lg:text-[2.5rem] font-semibold font-clash mb-4">Events</h2>
          <ul className="space-y-2 text-gray-100">
            <li>
              <Link href="/events" className="hover:underline">
                Events
              </Link>
            </li>
            <li>
              <Link href="/bootcamps" className="hover:underline">
                Bootcamps
              </Link>
            </li>
            <li>
              <Link href="/community" className="hover:underline">
                Community
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="w-full">
          <h2 className="text-xl sm:text-2xl lg:text-[2.5rem] font-semibold font-clash mb-4">Contact</h2>
          <ul className="space-y-2 text-gray-100">
            <li>
              <Link
                href="https://instagram.com"
                className="hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </Link>
            </li>
            <li>
              <Link
                href="https://linkedin.com"
                className="hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </Link>
            </li>
            <li>
              <Link
                href="https://facebook.com"
                className="hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </Link>
            </li>
            <li>
              <Link
                href="https://t.me"
                className="hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Telegram
              </Link>
            </li>
            <li>
              <Link
                href="https://youtube.com"
                className="hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                YouTube
              </Link>
            </li>
            <li>
              <Link
                href="https://twitter.com"
                className="hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </Link>
            </li>
          </ul>
        </div>

        {/* Stay in the Loop Section */}
        <div className="w-full row-start-3 col-span-2">
          <h2 className="text-xl sm:text-2xl lg:text-[2.5rem] font-semibold font-clash mb-4">Stay in the loop</h2>
          <p className="text-gray-300 mb-4">
            Stay informed on upcoming Bootcamps, classes, events, and upcoming
            activities we have lined up. Enter your email below to stay in the
            loop.
          </p>
          <form className="flex items-center w-full max-w-md bg-white rounded-full px-2 py-1.5 space-x-2">
            <input
              type="email"
              placeholder="your@gmail.com"
              className="flex-1 py-2 px-4 text-gray-900 bg-transparent placeholder-gray-500 focus:outline-none min-w-0"
            />
            <button
              type="submit"
              className="py-2.5 px-5 rounded-full bg-[#8B0000] text-white font-semibold hover:bg-[#660000] transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      {/* copyright section */}
      <div className="text-center font-lato lg:mt-12">
        <p>
          Copyright © {new Date().getFullYear()} Ginakev Digital Academy - GIDA™. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
