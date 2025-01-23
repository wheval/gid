"use client";
import Image from "next/image";
import { useState } from "react";
import RegisterSuccess from "./RegisterSuccess";
import { useRouter } from "next/navigation";
const IMAGES = {
  background: {
    src: "/assets/blurbg.png",
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
    src: "/assets/gidaxstark.png",
    alt: "Gida x Starknet",
    width: 250,
  },
};

const Register = () => {
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
    country: "",
    state: "",
    otherState: "",
    city: "",
    github: "",
    starknet: "",
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
    router.push("/cairo");
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
    }
    if (!formData.lastName) {
      setErrorMsq("Last name is required");
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

    if (!formData.country) {
      setErrorMsq("Country is required");

      return;
    }

    if (!formData.state && !formData.otherState) {
      setErrorMsq("Please provide a state or other state");

      return;
    }

    if (!formData.city) {
      setErrorMsq("City is required");

      return;
    }
    if (!formData.github) {
      setErrorMsq("Github Link is required");

      return;
    }
    if (!formData.starknet) {
      setErrorMsq("Starknet Wallet is required");

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
          country: "",
          state: "",
          otherState: "",
          city: "",
          github: "",
          starknet: "",
        });
      } else {
        console.log("Failed to submit form:", response.status);
        console.log("Failed to submit form:", await response.text());
        if (response?.status == 400) {
          setErrorMsq("Unexpected error occured");
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
          className="object-cover"
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
                  value={formData.firstName.split(" ")[0]}
                  onChange={handleChange}
                  className="border bg-transparent px-4 py-2 rounded-lg"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                  value={formData.lastName.split(" ")[0]}
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
                  name="proficiency"
                  value={formData.proficiency}
                  onChange={handleChange}
                  className="border bg-transparent px-4 py-2 rounded-lg"
                >
                  <option value="">What's your level of proficiency?</option>
                  <option value="novice">No existing coding knowledge</option>
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="professional">Professional</option>
                </select>
                <input
                  type="text"
                  name="github"
                  placeholder="Enter your GitHub profile link"
                  value={formData.github}
                  onChange={handleChange}
                  className="border bg-transparent px-4 py-2 rounded-lg"
                />
              </div>
              {/* choose stack */}
              <div>
                <h1 className="text-xl font-bold mt-12 mb-1">
                  What{"'"}s your current Stack?
                </h1>
                <div>
                  <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Frontend Developer */}
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="radio"
                        name="stack"
                        value="frontend"
                        onChange={handleChange}
                        className=" w-5 h-5 border border-gray-400 rounded-md "
                      />
                      <span className="text-gray-300">
                        Frontend Developer (HTML, CSS, JS, React)
                      </span>
                    </label>

                    {/* Backend Developer */}
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="radio"
                        name="stack"
                        value="backend"
                        onChange={handleChange}
                        className=" w-5 h-5 border border-gray-400 rounded-md "
                      />
                      <span className="text-gray-300">
                        Backend Developer (React, Python, Node, etc)
                      </span>
                    </label>

                    {/* Blockchain Dev */}
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="radio"
                        name="stack"
                        value="blockchain"
                        onChange={handleChange}
                        className=" w-5 h-5 border border-gray-400 rounded-md "
                      />
                      <span className="text-gray-300">
                        Blockchain Dev (Solidity, Rust)
                      </span>
                    </label>

                    {/* Not an existing dev */}
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="radio"
                        name="stack"
                        value="none"
                        onChange={handleChange}
                        className=" w-5 h-5 border border-gray-400 rounded-md "
                      />
                      <span className="text-gray-300">
                        Not an existing dev. Just starting out
                      </span>
                    </label>
                  </div>
                </div>
              </div>

              {/* starknet */}
              <div>
                <h1 className="text-xl font-bold mb-3 mt-12">
                  Submit link to your Starknet mainnet wallet address.
                </h1>
                <p className="mb-2 text-sm">
                  We'll be airdropping you an onchain NFT Certificate upon
                  successful completion of the bootcamp.
                </p>
                <p className="pb-4 text-sm">
                  NB: You can get a starknet wallet from
                  <a
                    href="https://argent.xyz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-blue-500 px-2"
                  >
                    Argent
                  </a>
                  or
                  <a
                    href="http://braavos.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-blue-500 px-2"
                  >
                    Braavos
                  </a>
                  wallets. The apps are on playstore/app store, and on chrome
                  extensions store.
                </p>
                <div>
                  <input
                    type="text"
                    name="starknet"
                    placeholder="Enter your Starknet Wallet Address from Argent / Braavos "
                    value={formData.starknet}
                    onChange={handleChange}
                    className="border bg-transparent px-4 w-full py-2 rounded-lg"
                  />{" "}
                </div>
              </div>
              {/* bootcamp location */}
              <div>
                <h1 className="text-xl font-bold mt-8 mb-4 capitalize">
                  your location, during the 8 weeks of this bootcamp
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Country"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="border bg-transparent px-4 py-2 rounded-lg"
                  />
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    placeholder="State"
                    className="border bg-transparent px-4 py-2 rounded-lg"
                  />
                  <input
                    type="text"
                    name="otherState"
                    value={formData.otherState}
                    onChange={handleChange}
                    placeholder="Specify State If you’re not in Nigeria"
                    className="border bg-transparent px-4 py-2 rounded-lg"
                  />
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="City"
                    className="border bg-transparent px-4 py-2 rounded-lg"
                  />
                </div>
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
          whatsapp={"https://chat.whatsapp.com/Jj7isikeRUxGhNKiB8bCT7"}
          eventText={"Cairo Bootcamp 2.0"}
        />
      )}
      {errorMsg && (
        <div className="mb-8 mx-2 font-[550] text-center text-red-500 mt-1">
          {" "}
          {errorMsg}{" "}
        </div>
      )}
    </main>
  );
};

export default Register;
