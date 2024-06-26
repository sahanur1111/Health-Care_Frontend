import React, { useCallback, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const CallPage = () => {
  const [value, setValue] = useState();
  const navigate = useNavigate();

  const handleJoinRoom = useCallback(() => {
    navigate(`/room/${value}`);
  }, [navigate, value]);

  return (
    <div className="flex flex-col items-center mt-10 mb-28">
      <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300 hover:bg-gray-100">
        <div className="p-6">
          <h1 className="text-3xl font-bold text-primaryColor mb-6">
            Enter Room Code to Join
          </h1>
          <div className="flex flex-col gap-2 items-center">
            <input
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              type="text"
              placeholder="Enter Room Code"
            />
            <Link
              to={`/dashboard/room/${value}`}
              className="btn text-center text-[13px] sm:text-[16px] px-6 py-3 rounded-md font-bold block bg-blue-500 text-white hover:bg-blue-700 transition duration-300"
              onClick={handleJoinRoom}
            >
              Join Room
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallPage;
