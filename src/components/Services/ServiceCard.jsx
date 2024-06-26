import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const ServiceCard = ({ item, index }) => {
  const { name, desc, bgColor, textColor } = item;

  return (
    <div
      className={`py-[30px] px-3 lg:px-5 rounded-lg shadow-md transform transition duration-300 ease-in-out ${bgColor} ${textColor} hover:bg-opacity-80 hover:shadow-lg hover:scale-105 cursor-pointer bg-[#CCF0F3] hover:text-blue-500`}
      key={index}
    >
      <h2 className="text-[26px] leading-9 font-[700]">{name}</h2>
      <p className="text-[16px] leading-7 mt-4">{desc}</p>

      <div className="flex items-center justify-between mt-[30px">
        <Link
          to="/doctors"
          className="w-11 h-11 rounded-full border-solid border-[#181A1E]  flex items-center justify-center group hover:bg-primaryColor border hover:border-none"
        >
          <BsArrowRight className="group-hover:text-white w-6 h-5" />
        </Link>
        <span
          className="w-[44px] h-[44px] flex items-center justify-center text-[18px] leading-[30px] font-[600]"
          style={{
            background: `${bgColor}`,
            color: `${textColor}`,
            borderRadius: "6px 0 0 6px",
          }}
        >
          {index + 1}
        </span>
      </div>
    </div>
  );
};

export default ServiceCard;
