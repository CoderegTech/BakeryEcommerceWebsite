import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

function SideNav({ active }) {
  const [dropDown, setDropDown] = useState(false);

  return (
    <div
      className={`${
        active ? "translate-x-0" : "translate-x-full"
      } fixed right-0 top-0 duration-100 delay-75 ease-in-out flex w-1/2 h-screen min-h-max overflow-y-auto bg-primary z-40`}
    >
      <ul className="pt-14 flex flex-col gap-3 text-xl w-full h-full">
        <li>
          <p
            onClick={() => setDropDown(!dropDown)}
            className="relative navlist flex gap-2 items-center"
          >
            ACCOUNT
            <span>{!dropDown ? <IoIosArrowDown /> : <IoIosArrowUp />}</span>
          </p>

          <ul
            className={`${
              !dropDown ? "h-0" : "h-full"
            } duration-300 ease-in-out overflow-hidden`}
          >
            <li className="navlist ml-2">Manage My Account</li>
            <li className="navlist ml-2">My Cart</li>
            <li className="navlist ml-2">My Orders</li>
            <li className="navlist ml-2">Login</li>
            <li className="navlist ml-2">Sign Up</li>
          </ul>
        </li>

        <li className="navlist">
          <Link to="/">HOME</Link>
        </li>
        <li className="navlist">ABOUT US</li>
        <li className="navlist">PRODUCTS</li>
        <li className="navlist">CONTACT</li>
      </ul>
    </div>
  );
}

export default SideNav;
