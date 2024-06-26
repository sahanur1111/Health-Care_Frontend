import React from "react";
import Home from "../pages/Home";
import Services from "../pages/Services";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Contact from "../components/Contact/Contact.jsx";
import Doctors from "../pages/Doctors/Doctors";
import DoctorsDetails from "../pages/Doctors/DoctorDetails";
import MyAccount from "../Dashboard/user-account/MyAccount";
import CheckoutSuccess from "../pages/Doctors/CheckoutSuccess";

import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import AIChatBot from "../components/AIChatBot/AIChatBot.jsx";
import Dashboard from "../Dashboard/doctor-account/Dashboard";
import DashBoard from "../components/DashBoard/DashBoard.jsx";
import RoomPage from "../components/VideoCallFeature/RoomPage.jsx";
import CallPage from "../components/VideoCallFeature/CallPage.jsx";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/doctors" element={<Doctors />} />
      <Route path="/doctors/:id" element={<DoctorsDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Signup />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />
      <Route path="/dashboard/addtoCall" element={<CallPage />} />
      <Route path="/dashboard/room/:roomId" element={<RoomPage />} />
      <Route path="/aichatbot" element={<AIChatBot />} />
      <Route path="/checkout-success" element={<CheckoutSuccess />} />
      <Route
        path="/users/profile/me"
        element={
          <ProtectedRoute allowedRoles={["patient"]}>
            <MyAccount />
            {/* <CallPage /> */}
            {/* <RoomPage /> */}
            {/* <DashBoard /> */}
          </ProtectedRoute>
        }
      />
      <Route
        path="/doctors/profile/me"
        element={
          <ProtectedRoute allowedRoles={["doctor"]}>
            <Dashboard />
            {/* <DashBoard /> */}
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default Routers;
