import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import sign from "../../src/assets/images/signup.gif";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import avatar from '../assets/images/doctor-img01.png'
import uploadImageToCloudinary from "../utils/uploadCloudinary";
import { BASE_URL } from "../config";
import { toast } from "react-toastify";
import HashLoader from "react-spinners/HashLoader";

const Signup = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    photo: setSelectedFile,
    gender: "male",
    role: "patient",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileInputChange = async (e) => {
    const file = e.target.files[0];
    const data = await uploadImageToCloudinary(file);

    setPreviewUrl(data.url);
    setSelectedFile(data.url);
    setFormData({
      ...formData,
      photo: data.url,
    });
  };

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${BASE_URL}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const { message } = await res.json();

      if (!res.ok) {
        throw new Error(message);
      }

      setLoading(false);
      toast.success(message);
      navigate("/login");
    } catch (error) {
      console.error(error); // Log the error for debugging purposes
      toast.error(error.message || "Failed to register"); // Use error.message if available, or a default message
      setLoading(false);
    }
  };

  const [showPassword, setShowPassword] = useState(false);

  return (
    <section className="container">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <h2 className="text-2xl font-bold leading-tight text-primaryColor sm:text-4xl">
              Create New Account!
            </h2>
            <p className="mt-2 text-base text-gray-600">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-red-600 font-bold transition-all duration-200 underline"
              >
                Login
              </Link>
            </p>

            {/* =======form========== */}

            <form className="mt-8" onSubmit={submitHandler}>
              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="text-base font-medium text-gray-900"
                  >
                    {" "}
                    Full Name <sup className="text-red-400 font-bold">*</sup>
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      placeholder="Full Name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    ></input>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="text-base font-medium text-gray-900"
                  >
                    {" "}
                    Email address{" "}
                    <sup className="text-red-400 font-bold">*</sup>
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="email"
                      placeholder="Email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    ></input>
                  </div>
                </div>
                <label className="relative w-full">
                  <p className="text-base font-medium text-gray-900">
                    Password <sup className="text-red-400 font-bold">*</sup>
                  </p>
                  <div className="relative">
                    <input
                      required
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      placeholder="Enter Password"
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                    <span
                      onClick={() => setShowPassword((prev) => !prev)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer"
                    >
                      {showPassword ? (
                        <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                      ) : (
                        <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                      )}
                    </span>
                  </div>
                </label>
                {/* ================ select option============ */}
                <div className="mb-5 flex items-center justify-between">
                  <label className="text-headingColor font-bold text-[16px] leading-7">
                    Are you a:
                    <select
                      name="role"
                      value={formData.role}
                      onChange={handleInputChange}
                      className="text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none cursor-pointer"
                    >
                      <option value="patient">Patient</option>
                      <option value="doctor">Doctor</option>
                    </select>
                  </label>
                  <label className="text-headingColor font-bold text-[16px] leading-7">
                    Gender:
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleInputChange}
                      className="text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none cursor-pointer"
                    >
                      <option value="">Select</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </label>
                </div>

                <div className="mb-5 flex items-center gap-3">
                {selectedFile && ( 
                    <figure className="w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor flex items-center justify-center">
                      <img
                        src={previewUrl}
                        alt=""
                        className="w-full rounded-full"
                      />
                    </figure>
                  )}

                  <div className="relative w-[160px] h-[50px]">
                    <input
                      type="file"
                      name="photo"
                      id="customFile"
                      onChange={handleFileInputChange}
                      accept=".jpg, .png "
                      className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    <label
                      htmlFor="customFile"
                      className="absolute top-0 left-0 w-full h-full flex items-center px-[0.75rem] py-[0.375rem] text-[15px] leading-6 overflow-hidden bg-[#0066ff46] text-headingColor font-semibold rounded-lg truncate cursor-pointer"
                    >
                      {" "}
                      Upload Photo
                    </label>
                  </div>
                </div>
                <div>
                  <button
                    disabled={loading && true}
                    type="submit"
                    className="inline-flex w-full items-center justify-center rounded-md bg-primaryColor px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                  >
                    {loading ? (
                      <HashLoader size={35} color="#ffffff" />
                    ) : (
                      "Create Account"
                    )}
                  </button>
                </div>
              </div>
            </form>
            <div className="mt-3 space-y-3">
              <button
                type="button"
                className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
              >
                <span className="mr-2 inline-block">
                  <svg
                    className="h-6 w-6 text-rose-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
                  </svg>
                </span>
                Sign up with Google
              </button>
            </div>
          </div>
        </div>
        <div className="h-full w-full relative">
          <img
            className="mx-auto h-full w-full rounded-md object-cover"
            src={sign}
            alt=""
          />
          <div className="absolute inset-0 flex items-center justify-center bg-transparent">
            {/* <h4 className="text-center text-sm sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl font-bold leading-tight text-white bg-opacity-50 p-4 animate-bounce">
              HealthCare encompasses medical services, treatments, and
              preventive measures for individuals.
            </h4> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
