import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="pt-20 text-white relative min-w-full h-screen max-h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/assets/blurbg.png"
          alt="Background"
          width={1000}
          height={1000}
          quality={100}
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-neutral-950/50"></div>
      </div>

      {/* Foreground Images */}
      <div className="flex flex-col items-center justify-center h-full gap-12">
        <Image
          src="/assets/gidaLogo.svg"
          width={5000}
          height={5000}
          alt="Foreground Image 2"
          className="w-64"
        />

        <div className="flex flex-col flex-wrap items-center justify-center gap-2 md:gap-4 max-w-3xl text-xs capitalize">
          <div className="text-2xl font-bold text-red-500 tracking-wide">
            page not found
          </div>
          <Link href="/" className="hover:underline animate-pulse text-lg">
            back home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
