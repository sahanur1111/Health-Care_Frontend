import React from "react";

const Location = () => {
  const locations = [
    {
      title: "Bengaluru office",
      timings: "Mon-Sat 9am to 5pm.",
      address: "100, Electronic City Phase-1, Bengaluru, Karnataka 560100 IN",
    },
    {
      title: "Head office",
      timings: "Mon-Sat 9am to 5pm.",
      address: "12th Main Rd, Indiranagar, Bengaluru, Karnataka 560008 IN",
    },
    {
      title: "Karnataka office",
      timings: "Mon-Sat 9am to 5pm.",
      address:
        "42, Residency Rd, Shanthala Nagar, Ashok Nagar, Bengaluru, Karnataka 560025 IN",
    },
  ];
  return (
    <div className="rounded-lg bg-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="py-20">
          <div className="grid grid-cols-1 gap-x-20 gap-y-8 lg:grid-cols-2">
            <div className="space-y-4">
              <p className="w-full text-4xl font-bold text-primaryColor">
                Our Offices
              </p>
              <p className="w-full text-lg text-gray-600">
                Find us at these locations.
              </p>
              <div className="relative overflow-hidden rounded-md">
                <div
                  className="relative"
                  style={{ paddingBottom: "100%", paddingLeft: "20%" }}
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3036.833107187879!2d88.4110555742867!3d22.56043523341804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02743203255595%3A0x9c37b30c00660fab!2sJadavpur%20University%2C%20Salt%20Lake%20Campus!5e1!3m2!1sen!2sin!4v1719064581006!5m2!1sen!2sin"
                    frameBorder="0"
                    allowFullScreen
                    aria-hidden="false"
                    tabIndex="0"
                    className="absolute top-0 right-0 bottom-0 left-0 w-full h-full"
                  ></iframe>
                </div>
              </div>
            </div>
            <div className="space-y-4 divide-y-2">
              {locations.map((location) => (
                <div
                  key={location.title}
                  className="flex flex-col space-y-2 pt-4 first:pt-0 lg:w-full"
                >
                  <p className="w-full text-xl font-semibold  text-gray-900">
                    {location.title}
                  </p>
                  <p className="w-full text-base  text-gray-600">
                    {location.timings}
                  </p>
                  <p className="text-sm font-semibold text-gray-600">
                    {location.address}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
