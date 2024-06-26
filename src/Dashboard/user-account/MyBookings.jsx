import React from "react";
import useFecthData from "../../hooks/useFecthData";
import { BASE_URL } from "../../config";
import Loading from "../../components/Loader/Loading";
import Error from "../../components/Error/Error";
import DoctorCard from "../../components/Doctors/DoctorCard.jsx";
import { FaVideo } from "react-icons/fa";
import { toast } from "react-toastify";
import HashLoader from "react-spinners/HashLoader";
import { Link } from "react-router-dom";

const MyBookings = () => {
  const {
    data: appointments,
    loading,
    error,
  } = useFecthData(`${BASE_URL}/users/appointment/my-appointments`);

  const hasAppointments = !loading && !error && appointments.length > 0;

  return (
    <div className="p-4">
      <div className="mb-6">
        {hasAppointments && (
          <Link to='/dashboard/addtoCall'
            disabled={loading && true}
            type="submit"
            className="flex w-full items-center justify-center rounded-md bg-primaryColor px-3.5 py-2.5 font-semibold text-white hover:bg-black shadow-md"
          >
            {loading ? <HashLoader size={35} color="#ffffff" /> : `Video Call Button`}
            <FaVideo className="ml-2" />
          </Link>
        )}
      </div>

      <div>
        {loading && !error && <Loading />}
        {error && !loading && <Error errMessage={error} />}

        {!loading && !error && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {appointments.map((doctor) => (
              <DoctorCard doctor={doctor} key={doctor._id} />
            ))}
          </div>
        )}

        {!loading && !error && appointments.length === 0 && (
          <h2 className="mt-5 text-center leading-7 text-[20px] font-semibold text-primaryColor">
            You don't have any appointments yet
          </h2>
        )}
      </div>
    </div>
  );
};

export default MyBookings;
