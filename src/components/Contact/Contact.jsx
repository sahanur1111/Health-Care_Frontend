import React, { useState } from "react";
import { LuSend } from "react-icons/lu";
import { BsRocketTakeoff } from "react-icons/bs";
import Location from "./Location";
import { toast, ToastContainer } from "react-toastify";
import emailjs from "@emailjs/browser";
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // EmailJS service ID and template ID, and public key
    const serviceId = "service_jxyxwbg";
    const templateId = "template_otas1nd";
    const publickKey = "Zc0VG_KSAvY09cXsb";

    // Create a new object that dynamic temple params
    const templateParams = {
      from_name: name,
      form_email: email,
      to_name: "Sahanur",
      message: message,
    };

    // send the email using EmailJS
    emailjs
      .send(serviceId, templateId, templateParams, publickKey)
      .then((response) => {
        console.log("Email sent successfully", response);
        if (response) {
          toast.success(`Hey ${name}, your message has been sent successfully!`);
        }
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((err) => {
        console.log("Error sending email:", err);
        toast.error("Failed to send message. Please try again later.");
      });
  };

  return (
    <div>
      <ToastContainer />
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-7xl py-12 md:py-24">
          <div className="grid items-center justify-items-center gap-x-4 gap-y-10 lg:grid-cols-2">
            {/* ============contact from =============*/}
            <div className="flex items-center justify-center">
              <div className="px-2 md:px-12">
                <h2 className="flex items-center text-2xl font-bold text-primaryColor md:text-4xl underline space-x-2">
                  Contact Us
                  <span className="ml-2 flex-shrink-0">
                    <BsRocketTakeoff className="text-xl md:text-2xl animate-ping" />
                  </span>
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                  Got a technical issue? Want to send feedback about a beta feature? Let us know.
                </p>
                {/* ==================form============ */}
                <form
                  action="#"
                  className="mt-8 space-y-4"
                  onSubmit={handleSubmit}
                >
                  <div className="grid w-full  items-center gap-1.5">
                    <label
                      className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="name"
                    >
                      Full Name
                      <span className="text-red-700 font-bold">
                        <sup>*</sup>
                      </span>
                    </label>
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                      type="text"
                      placeholder="Full Name"
                      value={name}
                      required
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="grid w-full  items-center gap-1.5">
                    <label
                      className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="email"
                    >
                      Email
                      <span className="text-red-700 font-bold">
                        <sup>*</sup>
                      </span>
                    </label>
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                      type="text"
                      placeholder="Email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="grid w-full  items-center gap-5">
                    <label
                      className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="message"
                    >
                      Message
                      <span className="text-red-700 font-bold">
                        <sup>*</sup>
                      </span>
                    </label>
                    <textarea
                      rows="3"
                      className="flex w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900 hover:border-gray-500"
                      placeholder="Leave us a message"
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </div>
                  <button
                    type="submit"
                    className="flex items-center justify-center w-full rounded-md bg-primaryColor px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    Send Message
                    <span className="ml-2">
                      <LuSend />
                    </span>
                  </button>
                </form>
              </div>
            </div>
            <img
              alt="Contact us"
              className="hidden max-h-full w-full rounded-lg object-cover lg:block"
              src="https://images.unsplash.com/photo-1543269664-56d93c1b41a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fGhhcHB5JTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
            />
          </div>
        </div>
      </div>
      {/* Address */}
      <Location />
      <hr className="mt-6" />
    </div>
  );
};

export default Contact;
