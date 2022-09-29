import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
const Pagination = () => {
  return (
    <div className="w-full grid place-items-center p-5">
      <div className="bg-primary relative px-3 py-2 flex gap-2 items-center justify-around rounded-full">
        <span className="hover:bg-primarydark p-2 rounded-full">
          <IoIosArrowBack className="text-white cursor-pointer" />
        </span>
        <ul className="w-full flex gap-2 text-white cursor-pointer">
          <li className="bg-primarydark border border-white px-2">1</li>
          <li className="hover:bg-primarydark border border-white px-2">2</li>
          <li className="hover:bg-primarydark border border-white px-2">3</li>
          <li className="hover:bg-primarydark border border-white px-2">4</li>
          <li className="hover:bg-primarydark border border-white px-2">5</li>
          <li className="hover:bg-primarydark border border-white px-2">...</li>
        </ul>
        <span className="hover:bg-primarydark p-2 rounded-full">
          <IoIosArrowForward className="text-white cursor-pointer" />
        </span>
      </div>
    </div>
  );
};

export default Pagination;
