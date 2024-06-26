import React from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
// import { useSelector } from "react-redux";

const RoomPage = () => {
  // const { user } = useSelector((state) => state.profile)
  const { roomId } = useParams();
  const myMeeting = async (element) => {
    const appID = 1831398222;
    const serverSecret = "c95ab8bb01c2d6ee033b85e78f8bbceb";
    // Data.now() is replaced with userId(from database)
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomId,
      Date.now().toString(), //userId
      "Sahanur" // user?.firstName + " " + user?.lastName User Name
    );

    // Create instance object from Kit Token.

    // console.log(kitToken);

    const zp = ZegoUIKitPrebuilt.create(kitToken);

    // start the call
    zp.joinRoom({
      container: element,
      sharedLinks: [
        {
          nama: "Copy Link",
          // url: `http://localhost:5173/room/${roomId}`,
          url:
            window.location.protocol +
            "//" +
            window.location.host +
            window.location.pathname +
            "?roomID=" +
            roomId,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.OneONoneCall, // Group call can possible // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
      },
      showScreenSharingButton: false,
    });
  };

  return (
    <div className="bg-gray-200 rounded-lg">
      <div className="w-full h-screen" ref={myMeeting} />
    </div>
  );
};

export default RoomPage;
