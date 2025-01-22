"use client";
import Image from "next/image";
import { useState } from "react";

import { useRouter } from "next/navigation";
import RegisterSuccess from "../RegisterSuccess";
const IMAGES = {
  background: {
    src: "/assets/chain-up-hero-bg.png",
    alt: "Background",
  },
  gidaLogo: {
    src: "/assets/gidaLogo.svg",
    alt: "Gida Logo",
    width: 500,
  },
  starknet: {
    src: "/assets/starknet.svg",
    alt: "Starknet Logo",
    width: 500,
  },
  combined: {
    src: "/assets/chainup/main1.png",
    alt: "Gida x Starknet",
    width: 350,
  },
};

const Ibadan = () => {
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
    gender: "",
    status: "",
    institution: "",
    proficiency: "",
    stack: "",
    attendance: "",
    terms: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showFields, setShowFields] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsq] = useState("");
  const [mail, setMail] = useState("");
  const router = useRouter();
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        stack: checked
          ? [...prev.stack, value]
          : prev.stack.filter((item) => item !== value),
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };
  //  handler to close the modal
  const handleCloseModal = () => {
    setSuccess(false);
    router.push("/chainup");
  };

  const updateFormFields = (e) => {
    e.preventDefault();
    if (!formData.email) {
      setErrorMsq("Email is required");
      return;
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      setErrorMsq("Please enter a valid email address");
      return;
    }
    setErrorMsq("");
    setShowFields(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.firstName) {
      setErrorMsq("First name is required");

      return;
    } else if (!/^[a-zA-Z]+$/.test(formData.firstName)) {
      setErrorMsq("First name must contain only letters");

      return;
    }
    if (!formData.lastName) {
      setErrorMsq("Last name is required");

      return;
    } else if (!/^[a-zA-Z]+$/.test(formData.lastName)) {
      setErrorMsq("Last name must contain only letters");

      return;
    }

    if (!formData.phone) {
      setErrorMsq("Phone number is required");

      return;
    } else if (!/^\d{10,15}$/.test(formData.phone)) {
      setErrorMsq("Phone number must be 10-15 digits long");

      return;
    }

    if (!formData.gender) {
      setErrorMsq("Gender is required");

      return;
    }

    if (!formData.status) {
      setErrorMsq("Status is required");

      return;
    }
    if (!formData.proficiency) {
      setErrorMsq("Proficiency level is required");
      return;
    }

    if (!formData.stack || formData.stack.length === 0) {
      setErrorMsq("Please select at least one technology stack");
      return;
    }
    if (!formData.attendance || formData.stack.attendance === 0) {
      setErrorMsq("Please specify if you will attend or not");
      return;
    }
    if (!formData.terms) {
      setErrorMsq("Please agree to the Terms and Conditions to proceed.");
      return;
    }
    try {
      setIsLoading(true);

      const data = new FormData();

      Object.entries(formData).forEach(([key, value]) => {
        if (Array.isArray(value)) {
          value.forEach((val) => data.append(key, val));
        } else {
          data.append(key, value);
        }
      });

      console.log("FormData object:", [...data.entries()]); // Debugging purpose

      // If your API expects JSON, convert FormData to a JSON object
      const jsonData = JSON.stringify(Object.fromEntries(data.entries()));
      console.log("JSON Payload:", jsonData);

      const response = await fetch(
        "https://api.gida.academy/bootcamps/f049acd2-7e7f-4bed-93b7-c1789153a7bb/register",
        {
          method: "POST",
          body: jsonData,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );

      if (response.ok) {
        const result = await response.json();
        console.log("Form submission successful:", result);
        setSuccess(true);
        setMail(formData.email);

        setFormData({
          email: "",
          firstName: "",
          lastName: "",
          phone: "",
          gender: "",
          status: "",
          institution: "",
          proficiency: "",
          stack: "",
          attendance: "",
          terms: "",
        });
      } else {
        console.log("Failed to submit form:", response.status);
        console.log("Failed to submit form:", await response.text());
        if (response?.status == 400) {
          setErrorMsq("All fields are required");
        }
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrorMsq("An error occurred while submitting the form.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className=" text-white relative min-h-screen pb-4">
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
          className="object-cover blur-[4px]"
        />
        <div className="absolute inset-0 bg-neutral-950/50"></div>
      </div>

      <div className="container mx-auto px-4 flex flex-col items-center pt-20 justify-center min-h-[calc(100vh-5rem)]">
        {/* Logo Section */}
        <div className="flex items-center gap-8 my-10">
          <Image
            src={IMAGES.gidaLogo.src}
            width={IMAGES.gidaLogo.width}
            height={IMAGES.gidaLogo.width}
            alt={IMAGES.gidaLogo.alt}
            className="w-28 hidden md:inline-block"
          />

          <span className="text-xl font-bold hidden md:inline-block ">x</span>
          <Image
            src={IMAGES.starknet.src}
            width={IMAGES.starknet.width}
            height={IMAGES.starknet.width}
            alt={IMAGES.starknet.alt}
            className="w-28 object-cover"
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
        <form onSubmit={handleSubmit} className="w-full max-w-3xl space-y-8">
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
                value={formData.email}
                onChange={handleChange}
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
                  name="firstName"
                  placeholder="First name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="border bg-transparent px-4 py-2 rounded-lg"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="border bg-transparent px-4 py-2 rounded-lg"
                />
                <input
                  type="number"
                  name="phone"
                  placeholder="Phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="border bg-transparent px-4 py-2 rounded-lg"
                />
                <input
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled
                  placeholder="E-mail"
                  className="border bg-transparent px-4 py-2 rounded-lg"
                />

                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="border bg-transparent px-4 py-2 rounded-lg"
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="border bg-transparent px-4 py-2 rounded-lg"
                >
                  <option value="">Current Status</option>
                  <option value="student">
                    Student in Tertiary Institution
                  </option>
                  <option value="graduate">Recent Graduate/NYSC</option>
                  <option value="employed">Working at a Company</option>
                  <option value="entrepreneur">
                    An Entrepreneur/ Self- employed
                  </option>
                </select>
                <input
                  type="text"
                  name="institution"
                  value={formData.institution}
                  onChange={handleChange}
                  placeholder="Specify Institution (if you are a student)"
                  className="border bg-transparent px-4 py-2 rounded-lg"
                />
                <select
                  name="attendance"
                  value={formData.attendance}
                  onChange={handleChange}
                  className="border bg-transparent px-4 py-2 rounded-lg"
                >
                  <option value="">
                    Are you certain that you’ll be in attendance?
                  </option>
                  <option value="yes">Yes, I'll be there</option>
                  <option value="no">Not certain</option>
                </select>
              </div>

              {/* choose stack */}
              <div>
                <h1 className="text-xl font-bold mt-8">
                  Which of These Best Defines You?
                </h1>
                <p className="text-gray-300 mb-5">Select all that applies</p>
                <div>
                  <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-2">
                    {/* web2 Developer */}
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="stack"
                        value="web2-dev"
                        onChange={handleChange}
                        className="w-5 h-5 border border-gray-400 rounded-md"
                      />
                      <span className="text-gray-300">
                        Web 2 Developer (Frontend/Backend)
                      </span>
                    </label>

                    {/* Blockchain developer */}
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="stack"
                        value="web3-dev"
                        onChange={handleChange}
                        className="w-5 h-5 border border-gray-400 rounded-md"
                      />
                      <span className="text-gray-300">
                        Web 3 / Blockchain developer
                      </span>
                    </label>

                    {/* General Blockchain/Crypto enthusiast */}
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="stack"
                        value="blockchain-enthusiast"
                        onChange={handleChange}
                        className="w-5 h-5 border border-gray-400 rounded-md"
                      />
                      <span className="text-gray-300">
                        General Blockchain/Crypto enthusiast
                      </span>
                    </label>

                    {/* Community/Social Media Manager */}
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="stack"
                        value="community-manager"
                        onChange={handleChange}
                        className="w-5 h-5 border border-gray-400 rounded-md"
                      />
                      <span className="text-gray-300">
                        Community/Social Media Manager
                      </span>
                    </label>

                    {/*Content Writer */}
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="stack"
                        value="content-writer"
                        onChange={handleChange}
                        className="w-5 h-5 border border-gray-400 rounded-md"
                      />
                      <span className="text-gray-300">Content Writer</span>
                    </label>

                    {/* UI/UX designer*/}
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="stack"
                        value="ui-ux"
                        onChange={handleChange}
                        className="w-5 h-5 border border-gray-400 rounded-md"
                      />
                      <span className="text-gray-300">UI/UX designer</span>
                    </label>

                    {/* Video Content Creator  */}
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="stack"
                        value="video-creator"
                        onChange={handleChange}
                        className="w-5 h-5 border border-gray-400 rounded-md"
                      />
                      <span className="text-gray-300">
                        Video Content Creator
                      </span>
                    </label>

                    {/* Crypto Trader /Forex Trader /Degen  */}
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="stack"
                        value="crypto-trader"
                        onChange={handleChange}
                        className="w-5 h-5 border border-gray-400 rounded-md"
                      />
                      <span className="text-gray-300">
                        Crypto Trader /Forex Trader /Degen
                      </span>
                    </label>

                    {/* Newbie*/}
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="stack"
                        value="newbie"
                        onChange={handleChange}
                        className="w-5 h-5 border border-gray-400 rounded-md"
                      />
                      <span className="text-gray-300">
                        Newbie (I don’t have any skill)
                      </span>
                    </label>
                  </div>
                </div>
              </div>

              {/* experience level */}
              <div className="my-4 pt-4">
                <p className="mb-2 mt-4 text-xl font-[550]">
                  How would you describe your experience level about Blockchain
                  Niche & Ecosystem?
                </p>
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="radio"
                    name="proficiency"
                    value="newbie"
                    onChange={handleChange}
                    className=" w-5 h-5 border border-gray-400 rounded-md "
                  />
                  <span className="text-gray-300">
                    Total newbie (Just starting out)
                  </span>
                </label>
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="radio"
                    name="proficiency"
                    value="beginner"
                    onChange={handleChange}
                    className="mt-1 w-5 h-5 border border-gray-400 rounded-md "
                  />
                  <span className="text-gray-300">
                    Beginner (started learning about it already)
                  </span>
                </label>
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="radio"
                    name="proficiency"
                    value="intermediate"
                    onChange={handleChange}
                    className="mt-1 w-5 h-5 border border-gray-400 rounded-md "
                  />
                  <span className="text-gray-300">
                    Intermediate (Already into the ecosystem but still trying to
                    find footing)
                  </span>
                </label>
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="radio"
                    name="proficiency"
                    value="advanced"
                    onChange={handleChange}
                    className="mt-1 w-5 h-5 border border-gray-400 rounded-md "
                  />
                  <span className="text-gray-300">
                    Advanced (I know my left from my right)
                  </span>
                </label>
              </div>

              {/* terms and conditions */}
              <div className="my-4 pt-4">
                <p className="mb-2 mt-4 text-xl font-[550]">
                  For registering and attending this event, our partner,
                  Starknet Foundation has something for you. Do you consent to
                  sharing your data with them?
                </p>

                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="radio"
                    name="terms"
                    value="yes"
                    onChange={handleChange}
                    className=" w-5 h-5 border border-gray-400 rounded-md "
                  />
                  <span className="text-gray-300">Yes</span>
                </label>

                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="radio"
                    name="terms"
                    value="no"
                    onChange={handleChange}
                    className="mt-1 w-5 h-5 border border-gray-400 rounded-md "
                  />
                  <span className="text-gray-300">No</span>
                </label>
              </div>

              <button
                type="submit"
                disabled={isLoading || !formData.email}
                className="w-full bg-[#900A15] hover:bg-[#a20b17] disabled:bg-[#9b4950]
                disabled:cursor-not-allowed uppercase px-6 py-3 mt-6 rounded-full
                transition-colors duration-200 font-medium"
              >
                {isLoading ? "submitting..." : "Submit"}
              </button>
            </div>
          )}

          {!showFields && (
            <button
              onClick={updateFormFields}
              disabled={isLoading || !formData.email}
              className="w-full bg-[#900A15] hover:bg-[#a20b17] disabled:bg-[#9b4950]
                     disabled:cursor-not-allowed uppercase px-6 py-3 rounded-full
                     transition-colors duration-200 font-medium"
            >
              {isLoading ? "Processing..." : "Next"}
            </button>
          )}
        </form>
      </div>
      {success && (
        <RegisterSuccess
          email={mail}
          onClose={handleCloseModal}
          whatsapp={"https://chat.whatsapp.com/BZkWPtJtLGSBNLPWa0G1GZ"}
        />
      )}
      {errorMsg && (
        <div className="mb-8 mx-2 font-[550] text-center text-red-500 mt-1">
          {errorMsg}
        </div>
      )}
    </main>
  );
};

export default Ibadan;
