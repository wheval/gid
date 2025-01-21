"use client";
import Link from "next/link";

const Footer = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("coming soon");
  };
  return (
    <footer className="bg-[#900A15] text-white py-16">
      <div className="w-full px-6 grid grid-cols-2  sm:grid-cols-3 gap-8  justify-items-stretch">
        {/* About Section */}
        <div>
          <h2 className="text-xl font-[550] mb-4">About</h2>
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
        <div>
          <h2 className="text-xl font-[550] mb-4">Events</h2>
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
        <div>
          <h2 className="text-xl font-[550] mb-4">Contact</h2>
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
      </div>

      {/* Stay in the Loop Section */}
      <div className="px-6 mt-8 max-w-lg">
        <h2 className="text-xl font-[550] mb-4">Stay in the loop</h2>
        <p className="text-gray-300 mb-4">
          Stay informed on upcoming Bootcamps, classes, events and upcoming
          activities we have lined up. Enter your email below to stay in the
          loop.
        </p>
        <form className="flex justify-between items-center bg-white rounded-full px-2 py-1.5 w-full">
          <input
            type="email"
            placeholder="your@gmail.com"
            className="flex-1 py-2 px-6 text-gray-900 bg-transparent placeholder-gray-500 focus:outline-none max-w-[200px]"
          />
          <button
            type="submit"
            className="py-2.5 px-5 rounded-full bg-[#8B0000] text-white font-semibold hover:bg-[#660000] transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>

      {/* copyright section */}
      <div className="text-center text-sm mt-12">
        <p>
          Copyright © 2025 Ginakev Digital Academy - GIDA™. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
