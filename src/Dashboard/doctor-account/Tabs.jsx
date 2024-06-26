import React, { useContext, useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import { authContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Tabs = ({ tab, setTab }) => {
  const { dispatch } = useContext(authContext);
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
  };
  const handleDelete = () => {
    dispatch({ type: "DELETE_ACCOUNT" });
    navigate("/register");
  };

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <span className="lg:hidden">
        {menuOpen ? (
          <BiX className="w-6 h-6 cursor-pointer" onClick={handleMenuToggle} />
        ) : (
          <BiMenu className="w-6 h-6 cursor-pointer" onClick={handleMenuToggle} />
        )}
      </span>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden flex flex-col p-5 bg-white shadow-panelShadow items-center h-max rounded-md transition-transform duration-300 ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        <button
          onClick={() => {
            setTab("overview");
            setMenuOpen(false);
          }}
          className={`${
            tab === "overview"
              ? "bg-indigo-100 text-primaryColor"
              : "bg-transparent text-headingColor"
          } w-full btn mt-0 rounded-md`}
        >
          Overview
        </button>
        <button
          onClick={() => {
            setTab("appointments");
            setMenuOpen(false);
          }}
          className={`${
            tab === "appointments"
              ? "bg-indigo-100 text-primaryColor"
              : "bg-transparent text-headingColor"
          } w-full btn mt-0 rounded-md`}
        >
          Appointments
        </button>
        <button
          onClick={() => {
            setTab("settings");
            setMenuOpen(false);
          }}
          className={`${
            tab === "settings"
              ? "bg-indigo-100 text-primaryColor"
              : "bg-transparent text-headingColor"
          } w-full btn mt-0 rounded-md`}
        >
          Profile
        </button>
        <div className="mt-10 w-full">
          <button
            className="w-full bg-[#181a1e] p-3 text-base leading-7 rounded-md text-white"
            onClick={handleLogout}
          >
            Logout
          </button>
          <button className="w-full bg-red-600 p-3 text-base leading-7 rounded-md text-white mt-4">
            Delete Account
          </button>
        </div>
      </div>

      {/* Desktop Menu */}
      <div
        className="hidden lg:flex flex-col p-8 bg-white shadow-panelShadow items-center h-max rounded-md"
      >
        <button
          onClick={() => setTab("overview")}
          className={`${
            tab === "overview"
              ? "bg-indigo-100 text-primaryColor"
              : "bg-transparent text-headingColor"
          } w-full btn mt-0 rounded-md`}
        >
          Overview
        </button>
        <button
          onClick={() => setTab("appointments")}
          className={`${
            tab === "appointments"
              ? "bg-indigo-100 text-primaryColor"
              : "bg-transparent text-headingColor"
          } w-full btn mt-0 rounded-md`}
        >
          Appointments
        </button>
        <button
          onClick={() => setTab("settings")}
          className={`${
            tab === "settings"
              ? "bg-indigo-100 text-primaryColor"
              : "bg-transparent text-headingColor"
          } w-full btn mt-0 rounded-md`}
        >
          Profile
        </button>
        <div className="mt-24 w-full">
          <button
            className="w-full bg-[#181a1e] p-3 text-base leading-7 rounded-md text-white"
            onClick={handleLogout}
          >
            Logout
          </button>
          <button className="w-full bg-red-600 p-3 text-base leading-7 rounded-md text-white mt-4" onClick={handleDelete}>
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
