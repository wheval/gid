"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const IMAGES = {
  background: {
    src: "/assets/blurbg.png",
    alt: "Background",
  },
  gidaLogo: {
    src: "/assets/gidaLogo.png",
    alt: "Gida Logo",
    width: 96,
  },
  starknet: {
    src: "/assets/starknet.png",
    alt: "Starknet Logo",
    width: 96,
  },
  combined: {
    src: "/assets/gidaxstark.png",
    alt: "Gida x Starknet",
    width: 250,
  },
};

const Register = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showFields, setShowFields] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      // Simulate form validation and submission logic
      console.log("Form submitted with email:", email);

      // Assuming the email is valid, show additional fields
      setShowFields(true);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className=" text-white relative min-h-screen">
      {/* Background Image */}
      <div className="fixed inset-0 -z-10">
        <Image
          src={IMAGES.background.src}
          alt={IMAGES.background.alt}
          fill
          priority
          quality={100}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx0fHRsdHSIgIRwlJCsrJCQkKysrMDIwMjAyMDI6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojr/2wBDARUXFyAeIB4gHiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICr/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAn/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
          className="object-cover"
        />
        <div className="absolute inset-0 bg-neutral-950/50"></div>
      </div>

      <div className="container mx-auto px-4 flex flex-col items-center justify-center min-h-[calc(100vh-5rem)]">
        {/* Logo Section */}
        <div className="flex items-center gap-8 my-10">
          <Link href="/">
            <Image
              src={IMAGES.gidaLogo.src}
              width={IMAGES.gidaLogo.width}
              height={IMAGES.gidaLogo.width}
              alt={IMAGES.gidaLogo.alt}
              className="w-24"
            />
          </Link>
          <span className="text-xl font-bold">×</span>
          <Image
            src={IMAGES.starknet.src}
            width={IMAGES.starknet.width}
            height={IMAGES.starknet.width}
            alt={IMAGES.starknet.alt}
            className="w-24"
          />
        </div>

        <Image
          src={IMAGES.combined.src}
          width={IMAGES.combined.width}
          height={IMAGES.combined.width}
          alt={IMAGES.combined.alt}
          className="mb-8"
        />

        {/* Form Section */}
        <form onSubmit={handleSubmit} className="w-full max-w-2xl space-y-8">
          {!showFields && (
            <div className="relative">
              <label
                htmlFor="email"
                className="absolute -top-6 left-0 text-sm text-gray-300"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full border bg-transparent outline-none px-8 py-3 rounded-lg 
                         focus:ring-2 focus:ring-white/50 transition-shadow"
                placeholder="Enter your email address"
                aria-describedby="email-hint"
              />
              <span id="email-hint" className="sr-only">
                Please enter a valid email address to register
              </span>
            </div>
          )}

          {showFields && (
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First name"
                  className="border bg-transparent px-4 py-2 rounded-lg"
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className="border bg-transparent px-4 py-2 rounded-lg"
                />
                <input
                  type="email"
                  placeholder="Mail"
                  className="border bg-transparent px-4 py-2 rounded-lg"
                />
                <input
                  type="text"
                  placeholder="Phone number"
                  className="border bg-transparent px-4 py-2 rounded-lg"
                />
                <select className="border bg-transparent px-4 py-2 rounded-lg">
                  <option>Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
                <select className="border bg-transparent px-4 py-2 rounded-lg">
                  <option>How did you hear about the bootcamp?</option>
                  <option>X (Formerly Twitter) </option>
                  <option>Instagram</option>
                  <option>Facebook</option>
                  <option>WhatsaApp</option>
                  <option>From A Friend</option>
                </select>
                <select className="border bg-transparent px-4 py-2 rounded-lg">
                  <option>Already a web2 developer?</option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
                <select className="border bg-transparent px-4 py-2 rounded-lg">
                  <option>What's your level of proficiency?</option>
                  <option>Novice</option>
                  <option>Beginner</option>
                  <option>Intermediate</option>
                  <option>Advanced</option>
                </select>
              </div>
              <button
                type="submit"
                disabled={isLoading || !email}
                className="w-full bg-[#900A15] hover:bg-[#a20b17] disabled:bg-[#9b4950]
                disabled:cursor-not-allowed uppercase px-6 py-3 mt-6 rounded-full
                transition-colors duration-200 font-medium"
              >
                {isLoading ? "Processing..." : "Submit"}
              </button>
            </div>
          )}

          {!showFields && (
            <button
              type="submit"
              disabled={isLoading || !email}
              className="w-full bg-[#900A15] hover:bg-[#a20b17] disabled:bg-[#9b4950]
                     disabled:cursor-not-allowed uppercase px-6 py-3 rounded-full
                     transition-colors duration-200 font-medium"
            >
              {isLoading ? "Processing..." : "Next"}
            </button>
          )}
        </form>
      </div>
    </main>
  );
};

export default Register;
