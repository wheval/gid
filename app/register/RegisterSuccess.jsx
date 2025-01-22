import { FaTelegram, FaWhatsapp } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const RegisterSuccess = ({ email, onClose, whatsapp }) => {
  // Add onClose prop
  return (
    <div className="fixed inset-0 flex items-center justify-center p-4 bg-gradient-to-tr from-[#FF4B59]/40 to-[#F7C338]/40 backdrop-blur-lg">
      <div className="bg-white rounded-3xl p-8 max-w-md w-full text-center relative text-black">
        {/* Add close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
        >
          <IoClose size={24} />
        </button>

        <h1 className="text-3xl font-bold mb-4">Congratulations!!!</h1>

        <p className="text-base md:text-lg mb-2 md:mb-4">
          You Have Successfully Registered For Cairo Bootcamp 2.0
        </p>

        <p className="text-base md:text-lg mb-2 md:mb-4">
          We've Sent You A Confirmation E-mail to
          <span className="underline font-[550]"> {email} </span>
        </p>

        <div className="flex flex-col gap-2 w-full justify-center items-center">
          <a
            href={whatsapp}
            className="flex justify-center items-center bg-green-500 hover:bg-green-600 text-white mb-2 rounded-md py-1.5 px-4 w-max gap-2"
          >
            <FaWhatsapp size={28} />
            <p>Join the group for all Registrants</p>
          </a>
          <a
            href="http://t.me/OfficialGIDAConvo"
            className="flex justify-center items-center bg-[#229ed9] hover:bg-sky-500 text-white  rounded-md py-1.5 px-4 gap-2"
          >
            <FaTelegram size={28} />
            <p>Join our telegram community</p>
          </a>
        </div>
        <p className=" mt-6">
          Follow Us Across All Socials And Stay Connected.
        </p>
      </div>
    </div>
  );
};

export default RegisterSuccess;
