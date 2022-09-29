import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import DropdownMenu from "./DropdownMenu";

function Header() {
  const [dropDown, setDropDown] = useState(false);
  const header = useRef(null);
  console.log(header);
  return (
    <header
      ref={header}
      className=" w-full flex justify-between items-center fixed top-5 z-50"
    >
      <ul className="hidden md:flex gap-8 px-5 py-2 items-center justify-center bg-primary left-0 border border-white rounded-tr-full rounded-br-full">
        <li className="navlist">
          <Link to="/">HOME</Link>
        </li>
        <li className="navlist">ABOUT US</li>
        <li className="navlist">PRODUCTS</li>
        <li className="navlist">CONTACT</li>
      </ul>

      <ul className="relative hidden md:flex px-5 py-2 items-center justify-center bg-primary letf-0 border border-white rounded-tl-full rounded-bl-full">
        <li
          onClick={() => setDropDown(!dropDown)}
          className="navlist flex gap-2 items-center"
        >
          ACCOUNT
          <span>{!dropDown ? <IoIosArrowDown /> : <IoIosArrowUp />}</span>
        </li>
        {!dropDown ? null : <DropdownMenu />}
      </ul>
      <Navbar />
    </header>
  );
}

export default Header;
