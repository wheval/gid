import Image from "next/image";
import Link from "next/link";

const RegistrationInfo = () => {
  return (
    <section>
      <div className="bg-[#BD1522] w-full flex justify-evenly items-center py-16">
        <div className="font-bold text-center text-white">
          <div className="text-5xl">000</div>
          <div className="text-lg">Registrants</div>
        </div>
        <Link href="/register" className="bg-white rounded-full px-28 py-3 text-[#BD1522] font-bold text-lg">
          Register
        </Link>
      </div>
      <div className="bg-white text-black flex items-center justify-between p-8 md:p-12 gap-12 font-[400]">
        <div className="flex-1">
          <h1 className="text-2xl font-bold mb-6">Bootcamp Overview</h1>
          <div className="text-sm md:text-xl text-justify" >
            <p className="mb-4">
              Are you a Web2 developer looking to pivot into the rapidly growing
              field of Web3 development? The Cairo Web3 Developers Bootcamp is
              specifically designed for you!
            </p>
            <p>
              This intensive bootcamp is tailored to equip Web2 developers with
              the necessary skills and knowledge to transition into Web3
              development, focusing on blockchain technology. Our expert
              instructors will guide you through a comprehensive curriculum,
              covering the fundamentals of blockchain, smart contracts, and
              decentralized applications (dApps).
            </p>
          </div>
        </div>
        <div className="flex-shrink-0 flex-1">
          <Image
            src="/assets/cairo.png"
            width={2000}
            height={2000}
            alt="hero"
            className="w-full rotate-12"
          />
        </div>
      </div>
    </section>
  );
};
export default RegistrationInfo;
