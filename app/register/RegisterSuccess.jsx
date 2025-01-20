import { FaTelegram, FaWhatsapp } from "react-icons/fa";

const RegisterSuccess = () => {
  return (
    <div className="fixed inset-0  flex items-center justify-center p-4 bg-gradient-to-tr from-[#FF4B59]/50 to-[#F7C338]/50">
      <div className="bg-white rounded-3xl p-8 max-w-md w-full text-center relative text-black">
        <h1 className="text-3xl font-bold mb-4">Congratulations!!!</h1>

        <p className="text-xl mb-4">
          You Have Successfully Registered For Cairo Bootcamp 2.0
        </p>

        <p className="text-lg mb-6">We've Sent You A Confirmation Mail @Mail</p>

        <p className="text-lg mb-6">
          Follow Us Across All Socials And Stay Connected.
        </p>

        <div className="flex justify-center gap-2">
          <a href="#">
            <FaTelegram size={28} color="#229ed9" />
          </a>
          <a href="#">
            <FaWhatsapp size={28} color="green" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default RegisterSuccess;
